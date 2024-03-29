import React from "react";
import { useFormContext } from "react-hook-form";

//components
import DatePicker from "@/components/form/datePicker/DatePicker";
import Input from "@/components/form/input/Input";
import Autocomplete from "@/components/form/autocomplete/Autocomplete";
import StepWrapper from "@/components/form/step/StepWrapper";
import LoadingGrid from "@/components/dataLoading/LoadingGrid";
import DataError from "@/components/dataError/DataError";

//services
import { getClients } from "@/services/client.service";

const Info = () => {
  const { clients, clientsError, clientsLoading } = getClients();
  const {
    control,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useFormContext();

  if (clientsLoading) return <LoadingGrid />;
  if (clientsError) return <DataError />;

  const clientsData = clients?.map((client) => ({
    _id: client._id,
    fullName: client.firstName + " " + client.surname,
  }));

  return (
    <StepWrapper title="Informacje o pomiarze">
      <Input label={`Nazwa pomiaru *`} type="text" name="name" fullWidth />
      <DatePicker name="date" label="Data *" fullWidth />
      <Autocomplete
        name="client"
        fullWidth
        label={`Klient *`}
        options={clientsData as []}
        optionLabel={"fullName"}
        optionRender={"_id"}
      />
      <Input label={`Notatki`} type="text" name="notes" fullWidth textarea />
    </StepWrapper>
  );
};

export default Info;
