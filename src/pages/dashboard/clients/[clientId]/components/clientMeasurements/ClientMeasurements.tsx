import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

//styles
import * as Styled from "./ClientMeasurements.styles";

//icons
import { FaPlus } from "react-icons/fa";

//components
import ButtonLink from "@/components/buttonLink/ButtonLink";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";
import ClientMeasurementsChart from "./chart/MeasurementsChart";

//services
import { getClientMeasurements } from "@/services/measurement.service";

const ClientMeasurements = ({ clientId }: { clientId: string }) => {
  const router = useRouter();
  const {
    clientMeasurements,
    clientMeasurementsLoading,
    clientMeasurementsError,
  } = getClientMeasurements(clientId);

  if (clientMeasurementsLoading) return <LoadingGrid />;
  if (clientMeasurementsError) return <DataError />;
  if (!clientMeasurements || clientMeasurements.length < 1) return null;

  return (
    <Styled.SectionWrapper>
      <Styled.HeadingWrapper>
        <h2>Pomiary klienta</h2>
        <ButtonLink
          icon={<FaPlus />}
          text="dodaj pomiar"
          linkSize={"base"}
          variant="primary"
          link={`/dashboard/measurements/new`}
        />
      </Styled.HeadingWrapper>

      <Styled.MeasurementsWrapper>
        <Styled.TableWrapper>
          <Styled.TableHeadWrapper>
            <tr>
              <th>nazwa</th>
              <th>data</th>
              <th>masa ciała (kg)</th>
              <th>wysokość ciała (cm)</th>
              <th>bmi</th>
            </tr>
          </Styled.TableHeadWrapper>
          <Styled.TableBodyWrapper>
            {clientMeasurements?.map((measurement) => (
              <tr
                key={measurement._id}
                onClick={() =>
                  router.push(`/dashboard/measurements/${measurement._id}`)
                }
              >
                <td>{measurement.name}</td>
                <td> {format(new Date(measurement.date), "dd.MM.yyyy")}</td>
                <td>{measurement.weight}</td>
                <td>{measurement.height}</td>
                <td>{measurement.bmi}</td>
              </tr>
            ))}
          </Styled.TableBodyWrapper>
        </Styled.TableWrapper>
      </Styled.MeasurementsWrapper>
      <ClientMeasurementsChart clientId={clientId} />
    </Styled.SectionWrapper>
  );
};

export default ClientMeasurements;
