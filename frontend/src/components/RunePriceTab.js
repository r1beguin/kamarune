import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';

const RunePriceTab = () => {
    const [data, setData] = useState([
        { name: 'vi', price: 27 },
        { name: 'sa', price: 25 },
        { name: 'tac', price: 50 },
    ]);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell>Rune</TableCell>
                    <TableCell>Prix (kamas)</TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default RunePriceTab;
