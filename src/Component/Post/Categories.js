import React, { Component } from 'react';

import Table from 'react-bootstrap/Table'

//scss
import style from "./Categories.module.scss";

//data for post
import data from './postData.json'

export default class categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: data,
            editData: false
        }
    }



    render() {


        return (
            <>
                <div className={style.tableBg}>
                    <div className='d-flex m-2 mb-3'>
                        <h2 className={style.title}>Categories</h2>
                    </div>

                    <Table className={style.table} responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Slug</th>
                                <th>Count</th>
                                <th></th>

                            </tr>

                        </thead>
                        <tbody className={style.tableBody}>
                            {

                                this.state.postData.map(
                                    (data) => {
                                        return (

                                            <tr className={style.trMain} key={data.userId} >
                                                <td>{data.Name}</td>
                                                <td>{data.Description}</td>
                                                <td>{data.Slug}</td>
                                                <td>{data.Count}</td>
                                                <td className={style.tableIcon}><span key={data.uniqe} >&#8285;</span></td>
                                               
                                            </tr>

                                        )
                                    }
                                )}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}
