import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Table, { IColumn } from "./Table";
import { createMockRouter, setupProviders } from "@/utils/testSetup";
import { RouterContext } from "next/dist/shared/lib/router-context";

const sampleColumns: IColumn[] = [
  { key: "name", label: "Name", type: "text" },
  { key: "age", label: "Age", type: "number" },
];

const sampleItems = [
  { _id: "1", name: "John", age: 30 },
  { _id: "2", name: "Jane", age: 25 },
];

const itemLink = "/details";

let tableComponent: RenderResult;

beforeEach(() => {
  tableComponent = setupProviders(
    <RouterContext.Provider value={createMockRouter({ query: { id: "22" } })}>
      <Table items={sampleItems} columns={sampleColumns} itemLink={itemLink} />
    </RouterContext.Provider>
  );
});

describe("Table", () => {
  it("should render table headers and rows", () => {
    const { getByText, getAllByRole } = tableComponent;

    // Check if table headers are rendered
    sampleColumns.forEach((column) => {
      const header = getByText(column.label);
      expect(header).toBeInTheDocument();
    });

    // Check if table rows are rendered
    const tableRows = getAllByRole("row");
    expect(tableRows).toHaveLength(sampleItems.length + 1); // +1 for the header row
  });
});
