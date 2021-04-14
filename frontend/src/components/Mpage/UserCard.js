/** @format */

import React, { useState, useContext } from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import axios from "axios";
import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import user4 from "../../images/user4.png";
import { MyContext } from "../../Container";

const images = [user1, user2, user3, user4];

export default function UserCard(props) {
  const user = props.user;
  const randImg = images[props.imageNum];
  const [groups, setGroups] = useState();
  const [showRoles, setShowRoles] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const { kg } = useContext(MyContext);

  const getAllGroups = () => {
    axios({
      method: "GET",
      // withCredentials: true,
      url: `http://localhost:3001/groups/getAllGroups/${kg._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const changeGroup = (id) => {
    //to assign none as group:
    let obj;
    if (selectedGroup == "empty") {
      obj = {
        method: "PUT",
        // withCredentials: true,
        url: `http://localhost:3001/users/userGroup/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
    } else {
      obj = {
        method: "PUT",
        // withCredentials: true,
        url: `http://localhost:3001/users/users/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: { group: selectedGroup },
      };
    }
    axios(obj)
      .then((result) => {
        if (result.data.success) {
          //reload the page:
          setGroups(null);
          window.location.reload();
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const changeRole = (id) => {
    axios({
      method: "PUT",
      // withCredentials: true,
      url: `http://localhost:3001/users/users/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { role: selectedRole },
    })
      .then((result) => {
        if (result.data.success) {
          //close the lines and reload the page:
          setShowRoles(false);
          window.location.reload();
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div key={user._id}>
      <Card style={{ width: "18rem", margin: "10px 10px" }} bg='success'>
        <Card.Img
          variant='top'
          src={randImg}
          style={{ width: "100px", height: "100px", margin: "5px auto" }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {user.firstName} {user.lastName}
          </Card.Title>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem style={{ textAlign: "center" }}>
            {user.group
              ? `Group: ${user.group.groupName}`
              : "Please assign a group"}
          </ListGroupItem>
          <ListGroupItem style={{ textAlign: "center" }}>
            {user.role}
          </ListGroupItem>
        </ListGroup>
        <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant='primary'
            style={{ display: "inline" }}
            onClick={!groups ? () => getAllGroups() : () => setGroups(null)}>
            edit group
          </Button>
          <Button
            variant='primary'
            style={{ display: "inline" }}
            onClick={() => setShowRoles(!showRoles)}>
            edit role
          </Button>
        </Card.Body>
        {/* Role buttons */}
        {showRoles && (
          <ListGroup className='list-group-flush'>
            <ListGroupItem
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <form>
                <label htmlFor='Teacher' style={{ flexDirection: "row" }}>
                  <input
                    style={{ display: "inline", width: "20px", height: "20px" }}
                    type='radio'
                    id='Teacher'
                    name='role'
                    value='Teacher'
                    onClick={() => setSelectedRole("Teacher")}
                  />
                  Teacher
                </label>

                <label htmlFor='Manager'>
                  <input
                    style={{ display: "inline", width: "20px", height: "20px" }}
                    type='radio'
                    id='Manager'
                    name='role'
                    value='Manager'
                    onClick={() => setSelectedRole("Manager")}
                  />
                  Manager
                </label>
              </form>
            </ListGroupItem>
            <Button
              variant='primary'
              style={{ display: "inline" }}
              onClick={() => changeRole(user._id)}
              disabled={selectedRole ? false : true}>
              save
            </Button>
          </ListGroup>
        )}
        {/* Group name buttons */}
        {groups && (
          <ListGroup className='list-group-flush'>
            <ListGroupItem
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0",
              }}>
              <form>
                {groups.map((group) => {
                  return (
                    <label
                      key={group.groupName}
                      htmlFor={group.groupName}
                      style={{ flexDirection: "row" }}>
                      <input
                        style={{
                          display: "inline",
                          width: "20px",
                          height: "20px",
                        }}
                        type='radio'
                        id={group.groupName}
                        name='group'
                        value={group.groupName}
                        onClick={() => setSelectedGroup(group._id)}
                      />
                      {group.groupName}
                    </label>
                  );
                })}
                <label
                  key='none'
                  htmlFor='none'
                  style={{ flexDirection: "row" }}>
                  <input
                    style={{
                      display: "inline",
                      width: "20px",
                      height: "20px",
                    }}
                    type='radio'
                    id='none'
                    name='group'
                    value='none'
                    onClick={() => setSelectedGroup("empty")}
                  />
                  none
                </label>
              </form>
            </ListGroupItem>
            <Button
              variant='primary'
              style={{ display: "inline" }}
              onClick={() => changeGroup(user._id)}
              disabled={selectedGroup ? false : true}>
              save
            </Button>
          </ListGroup>
        )}
      </Card>
    </div>
  );
}
