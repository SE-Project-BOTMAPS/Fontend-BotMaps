import "../list.css";
import React from "react";

// prime react
import {Accordion, AccordionTab} from 'primereact/accordion';

// type
import type {SearchResponse} from "../../../../state/slices/types/search.type.ts"
import {DataTableSearch} from "./DataTableSearch.tsx";

interface listData {
    data?: SearchResponse
}

const SearchList: React.FC<listData> = ({data}) => {
    return (
        <div>
            <div>
                <Accordion multiple activeIndex={[0, 1]}>
                    <AccordionTab header="Search Result">
                        <DataTableSearch data={data}/>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    );
};
export default SearchList;
