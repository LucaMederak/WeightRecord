import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

//styles
import * as Styled from "./Measurements.styles";

//queries
import { useMeasurements } from "@/queries/useMeasurements";

//icons
import { FaPlus } from "react-icons/fa";

//components
import ButtonLink from "@/components/buttonLink/ButtonLink";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";

const MeasurementsPage = () => {
  const router = useRouter();
  const { measurements, measurementsLoading, measurementsError } =
    useMeasurements();

  if (measurementsLoading) return <LoadingGrid />;
  if (measurementsError) return <DataError />;

  return (
    <>
      <Styled.HeadingWrapper>
        <h1>Pomiary</h1>
        <ButtonLink
          icon={<FaPlus />}
          text="Dodaj pomiar"
          linkSize={"base"}
          variant="primary"
          link={`/dashboard/measurements/new`}
        />
      </Styled.HeadingWrapper>

      {measurements!.length > 0 && (
        <Styled.MeasurementsWrapper>
          <Styled.TableWrapper>
            <Styled.TableHeadWrapper>
              <tr>
                <th>nazwa</th>
                <th>data</th>
              </tr>
            </Styled.TableHeadWrapper>
            <Styled.TableBodyWrapper>
              {measurements?.map((measurement) => (
                <tr
                  key={measurement._id}
                  onClick={() =>
                    router.push(`/dashboard/measurements/${measurement._id}`)
                  }
                >
                  <td>{measurement.name}</td>
                  <td> {format(new Date(measurement.date), "dd.MM.yyyy")}</td>
                </tr>
              ))}
            </Styled.TableBodyWrapper>
          </Styled.TableWrapper>
        </Styled.MeasurementsWrapper>
      )}
    </>
  );
};

export default MeasurementsPage;
