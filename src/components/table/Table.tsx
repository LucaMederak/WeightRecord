import React from "react";
import { useRouter } from "next/router";

//styles
import * as Styled from "./Table.styles";

interface ITableProps {
  items: {
    _id: string;
    [key: string]: string | number;
  }[];
  columns: IColumn[];
  itemLink: string;
}

//key: weight, label: masa ciała, type: number
export interface IColumn {
  key: string;
  label: string;
  type: "text" | "number" | "image" | "images";
}

const Table = ({ items, columns, itemLink }: ITableProps) => {
  const router = useRouter();

  return (
    <Styled.TableContainer>
      <Styled.TableWrapper>
        <Styled.TableHeadWrapper>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                <p> {column.label}</p>
              </th>
            ))}
          </tr>
        </Styled.TableHeadWrapper>
        <Styled.TableBodyWrapper>
          {items.map((row) => (
            <tr
              key={row._id}
              onClick={() => router.push(`${itemLink}/${row._id}`)}
            >
              {columns.map((column) => (
                <td key={column.key}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </Styled.TableBodyWrapper>
      </Styled.TableWrapper>
    </Styled.TableContainer>
  );
};

export default Table;
