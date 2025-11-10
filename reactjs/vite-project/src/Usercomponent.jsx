import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
const Usercomponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  let handleAge = (e) => {
    setAge(e.target.value);
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      let res = data.map((i,index)=>{
              if(index == id){
                  i.name = name
                  i.age = age
                  i.salary = salary
              }
              return i
      })
      setData(res)
    } else {
      setData([
        ...data,
        { name, age, salary },
        // {
        //     "name":name,
        //     "age":age,
        //     "salary":salary
        // }
      ]);
    }

    setName("");
    setAge("");
    setSalary("");
    setId("");
  };
  const delData = (id) => {
    //1 2  4 5 id=3
    let res = data.filter((i, index) => {
      return index != id;
    });
    setData(res);
  };
  let editData = (id) => {
    let res = data.find((i, index) => {
      return index == id;
    });
    setName(res.name);
    setAge(res.age);
    setSalary(res.salary);
    setId(id);
  };
  return (
    <div>
      <h3>User Registration Form</h3>
      <Container fluid="md">
        <Row>
          <Col>
            <Form name="frm" method="post" action="#" onSubmit={saveData}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Age"
                  name="age"
                  onChange={handleAge}
                  value={age}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupsal">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Salary"
                  name="salary"
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Save
              </Button>
              <Button variant="danger" type="reset">
                Cancel
              </Button>
            </Form>
          </Col>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Age</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((i, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{i.name}</td>
                      <td>{i.age}</td>
                      <td>{i.salary}</td>
                      <td>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={() => editData(index)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          type="button"
                          onClick={() => delData(index)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Usercomponent;
