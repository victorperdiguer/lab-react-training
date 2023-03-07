import React, { useState } from "react";

const NumbersTable = (props) => {
    const { limit } = props;
    const table = [];
    for (let i = 1; i<=limit; i++) {
        i%2 !== 0 ? table.push(<div key={i} className="table-number-odd table-cell">{i}</div>) : table.push(<div key={i} className="table-number-even table-cell">{i}</div>)
    }
    return (
        <div className="numbers-table">
            {table}
        </div>
    )
}

export default NumbersTable;