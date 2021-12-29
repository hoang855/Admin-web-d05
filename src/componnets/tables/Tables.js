import React from "react";
import Card from "../Layouts/Card";
import "./Tables.css";


const Tables = () => {
  return (
    <div>
      <span>OVERVIEW</span>
      <h3>Data Tables</h3>
      <Card className="main-table">
        <table class="table">
          <tbody>
            <tr>
              <th style={{ color: "#3d5170" }}><h6>Data table</h6></th>
              <th ></th>
              <th></th>
              <th ></th>
              <th ></th>
              <th ></th>
            </tr>
            <tr>
              <th >#</th>
              <th>First Name</th>
              <th >Last Name</th>
              <th >Country</th>
              <th >City</th>
              <th >Phone</th>
            </tr>
            <tr>
              <th >1</th>
              <th >Ali</th>
              <th >Kerry</th>
              <th >Russian Federation</th>
              <th >Gdansk</th>
              <th >107-0339</th>
            </tr>
            <tr>
              <th >2</th>
              <th >Clark</th>
              <th >Angela</th>
              <th >Estonia</th>
              <th >Borghetto di Vara</th>
              <th >1-660-850-1647</th>
            </tr>
            <tr>
              <th >3</th>
              <th >Jerry</th>
              <th >Nathan</th>
              <th >Cyprus</th>
              <th >Braunau am Inn</th>
              <th >214-4225</th>
            </tr>
            <tr>
              <th >4</th>
              <th >Colt</th>
              <th >Angela</th>
              <th >Liberia</th>
              <th >Bad Hersfeld</th>
              <th >1-848-473-7416</th>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card className="under-table">
        <table class="table table-dark">
          <tbody>
            <tr>
              <th><h6>Data table</h6></th>
              <th ></th>
              <th></th>
              <th ></th>
              <th ></th>
              <th ></th>
            </tr>
            <tr>
              <th >#</th>
              <th>First Name</th>
              <th >Last Name</th>
              <th >Country</th>
              <th >City</th>
              <th >Phone</th>
            </tr>
            <tr>
              <th >1</th>
              <th >Ali</th>
              <th >Kerry</th>
              <th >Russian Federation</th>
              <th >Gdansk</th>
              <th >107-0339</th>
            </tr>
            <tr>
              <th >2</th>
              <th >Clark</th>
              <th >Angela</th>
              <th >Estonia</th>
              <th >Borghetto di Vara</th>
              <th >1-660-850-1647</th>
            </tr>
            <tr>
              <th >3</th>
              <th >Jerry</th>
              <th >Nathan</th>
              <th >Cyprus</th>
              <th >Braunau am Inn</th>
              <th >214-4225</th>
            </tr>
            <tr>
              <th >4</th>
              <th >Colt</th>
              <th >Angela</th>
              <th >Liberia</th>
              <th >Bad Hersfeld</th>
              <th >1-848-473-7416</th>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  )

};

export default Tables;
