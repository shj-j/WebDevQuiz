import React, { Component } from 'react'
// import { Table } from 'rsuite';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

const URL = "localhost:3306/orders"
class Order extends Component {
    constructor(props) { 
        super(props);
        this.state = {
          data: [{
                    "id": 1,
                    "name":"可乐1",
                    "price": "1元/瓶",
                    "amount":2
                },
                {
                    "id": 2,
                    "name":"可乐2",
                    "price": "1元/瓶",
                    "amount":1
                  },
                  {
                    "id": 3,
                    "name":"可乐2",
                    "price": "1元/瓶",
                    "amount":5
                  }]
        };
      }
    render() {
        console.log(this.state.data);
        return(
            <div>

                <Table data = {this.state.data} height={400} onRowClick={data => {console.log(data);}}>
                    <Column width={70}>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>
                    <Column width={70}>
                        <HeaderCell>姓名</HeaderCell>
                        <Cell dataKey="name" />
                    </Column>    
                    <Column width={70}>
                        <HeaderCell>单价</HeaderCell>
                        <Cell dataKey="price" />
                    </Column>
                    <Column width={70}>
                        <HeaderCell>数量</HeaderCell>
                        <Cell dataKey="amount" />
                    </Column>
                    <Column width={120} fixed="right">
                        <HeaderCell>操作</HeaderCell>
                        <Cell>
                        {rowData => {
                            function handleAction() {
                            alert(`id:${rowData.id}`);
                            }
                            return (
                            <span>
                                <a onClick={handleAction}> 删除 </a>
                            </span>
                            );
                        }}
                        </Cell>
                    </Column>
                </Table>
            </div>
        );
    }
}
export default Order;