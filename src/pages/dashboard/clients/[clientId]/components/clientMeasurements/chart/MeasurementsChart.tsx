import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import format from "date-fns/format";
import { pl } from "date-fns/locale";
import { useTheme } from "styled-components";
import { IMeasurementData } from "@/interfaces/measurement.interfaces";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
  AreaChart,
  TooltipProps,
} from "recharts";

import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

//styles
import * as Styled from "./MeasurementsChart.styles";

//icon
import { FaChevronDown, FaCog, FaFileAlt } from "react-icons/fa";

//components
import ModalContentWrapper from "@/components/modal/Modal";
import DataError from "@/components/dataError/DataError";
import DataNotFound from "@/components/dataNotFound/DataNotFound";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import { useClientMeasurements } from "@/queries/useMeasurements";

interface IMeasurementOption {
  id: number;
  name: string;
  key: keyof Pick<IMeasurementData, "weight" | "bmi" | "cpm">;
  unit: string;
}

const measurementOptions: IMeasurementOption[] = [
  { id: 1, name: "masa ciała [kg]", key: "weight", unit: "kg" },
  { id: 2, name: "bmi [kg/m2]", key: "bmi", unit: "kg/m2" },
  { id: 3, name: "cpm [kcal]", key: "cpm", unit: "kcal" },
];

interface IMeasurementReportArgs {
  measurementStart: IMeasurementData;
  measurementEnd: IMeasurementData;
  currentOption: IMeasurementOption;
}

export const round2 = (macro: number) => {
  return Math.round(macro * 1e2) / 1e2;
};

const renderMeasurementReportValue = ({
  measurementStart,
  measurementEnd,
  currentOption,
}: IMeasurementReportArgs) => {
  const value =
    measurementEnd[currentOption.key] - measurementStart[currentOption.key];

  return `${value > 0 ? "+" : " "} ${round2(value)} ${currentOption.unit}`;
};

const dateFormat = (date: Date) => {
  const formatDate = format(new Date(date), "dd.MM.yyyy", {
    locale: pl,
  });

  return formatDate;
};

const ClientMeasurementsChart = ({ clientId }: { clientId: string }) => {
  const theme = useTheme();

  const {
    clientMeasurements,
    clientMeasurementsLoading,
    clientMeasurementsError,
  } = useClientMeasurements(clientId);

  const [currentOption, setCurrentOption] = useState(measurementOptions[0]);
  const [measurementStart, setMeasurementStart] = useState<IMeasurementData>();
  const [measurementEnd, setMeasurementEnd] = useState<IMeasurementData>();
  const [measurementOptionsOpen, setMeasurementOptionsOpen] = useState(false);
  const [measurementSettingsOpen, setMeasurementSettingsOpen] = useState(false);
  const [allMeasurementsOpen, setAllMeasurementsOpen] = useState(false);

  useEffect(() => {
    if (clientMeasurements) {
      setMeasurementStart(clientMeasurements[0]);
      setMeasurementEnd(clientMeasurements[clientMeasurements.length - 1]);
    }
  }, [clientMeasurements]);

  const openMeasurementOptionsPopup = () => {
    setMeasurementOptionsOpen(!measurementOptionsOpen);
  };

  if (clientMeasurementsLoading) return <LoadingGrid />;
  if (clientMeasurementsError) return <DataError />;
  if (!clientMeasurements) return <DataNotFound />;
  if (clientMeasurements.length < 2) return null;

  return (
    <>
      <Styled.MeasurementContainer>
        <Styled.MeasurementReportWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
        >
          <Styled.MeasurementReportNavWrapper>
            <Styled.MeasurementSelectWrapper active={measurementOptionsOpen}>
              <button onClick={openMeasurementOptionsPopup}>
                <p>{currentOption.name}</p>
                <FaChevronDown />
              </button>
              <AnimatePresence>
                {measurementOptionsOpen && (
                  <MeasurementSelectPopup
                    setCurrentOption={setCurrentOption}
                    closePopup={() => setMeasurementOptionsOpen(false)}
                  />
                )}
              </AnimatePresence>
            </Styled.MeasurementSelectWrapper>
            {/* <Styled.MeasurementNavButtonsWrapper>
              <IconButton
                icon={<FaCog />}
                onClick={() => setMeasurementSettingsOpen(true)}
              />
              <IconButton
                icon={<FaFileAlt />}
                onClick={() => setAllMeasurementsOpen(true)}
              />
            </Styled.MeasurementNavButtonsWrapper> */}
          </Styled.MeasurementReportNavWrapper>
          {measurementStart && measurementEnd && (
            <Styled.MeasurementReportValuesWrapper>
              <Styled.MeasurementReportDatesWrapper>
                <p>
                  {dateFormat(measurementStart.date)} -{" "}
                  {dateFormat(measurementEnd.date)}
                </p>
              </Styled.MeasurementReportDatesWrapper>
              <Styled.MeasurementReportValueWrapper>
                <span>
                  {renderMeasurementReportValue({
                    measurementStart,
                    measurementEnd,
                    currentOption,
                  })}
                </span>
              </Styled.MeasurementReportValueWrapper>
            </Styled.MeasurementReportValuesWrapper>
          )}

          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={clientMeasurements}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={theme.colors.border.grey}
                fontFamily="Inter"
              />
              <XAxis
                dataKey="name"
                stroke={theme.colors.text.heading}
                tickMargin={12}
                style={{
                  fontSize: "1.5rem",
                }}
              />
              <YAxis
                dataKey={currentOption.key}
                stroke={theme.colors.text.heading}
                tickMargin={12}
                style={{
                  fontSize: "1.5rem",
                }}
                width={40}
              />
              <Tooltip
                content={<CustomTooltip currentOption={currentOption} />}
              />

              <Line
                type="monotone"
                dataKey={currentOption.key}
                aria-label={currentOption.name}
                stroke="#7647cc"
              />
              <defs>
                <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                  <stop
                    offset="20%"
                    stopColor={theme.colors.primary[500]}
                    stopOpacity={0.4}
                  />
                  <stop
                    offset="95%"
                    stopColor={theme.colors.primary[500]}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey={currentOption.key}
                fill="url(#colorUv)"
                stopColor={theme.colors.primary[500]}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Styled.MeasurementReportWrapper>
      </Styled.MeasurementContainer>
      {/* <AnimatePresence>
        {measurementSettingsOpen && (
          <ModalContentWrapper
            onClose={() => setMeasurementSettingsOpen(false)}
            width="sm"
          >
            <SettingsModalContent />
          </ModalContentWrapper>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {allMeasurementsOpen && (
          <ModalContentWrapper
            onClose={() => setAllMeasurementsOpen(false)}
            width="sm"
          >
            <AllMeasurementsModalContent />
          </ModalContentWrapper>
        )}
      </AnimatePresence> */}
    </>
  );
};

interface ICustomTooltip extends TooltipProps<ValueType, NameType> {
  currentOption: IMeasurementOption;
}

const CustomTooltip = ({
  active,
  payload,
  label,
  currentOption,
}: ICustomTooltip) => {
  if (active)
    return (
      <Styled.MeasurementCustomTooltip>
        <h2>{label}</h2>{" "}
        <p>
          {payload && payload[0].value} {currentOption.unit}
        </p>
      </Styled.MeasurementCustomTooltip>
    );
  return null;
};

const MeasurementSelectPopup = ({
  setCurrentOption,
  closePopup,
}: {
  setCurrentOption: (option: IMeasurementOption) => void;
  closePopup: () => void;
}) => {
  const popupRef = useRef<HTMLUListElement>(null);
  const selectAction = (option: IMeasurementOption) => {
    setCurrentOption(option);
    closePopup();
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!popupRef.current?.contains(e.target as Node)) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <Styled.MeasurementSelectPopupWrapper
      ref={popupRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {measurementOptions.map((option) => (
        <Styled.MeasurementSelectPopupItem
          key={option.id}
          onClick={() => selectAction(option)}
        >
          {option.name}
        </Styled.MeasurementSelectPopupItem>
      ))}
    </Styled.MeasurementSelectPopupWrapper>
  );
};

export default ClientMeasurementsChart;
