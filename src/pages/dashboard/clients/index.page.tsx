import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  return (
    <div>
      <Link href={`/dashboard/clients/new`}>dodaj klienta</Link>
    </div>
  );
};

export default ClientsPage;
