import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import { MDBCol, MDBInput } from "mdbreact";

const Task2 = () => {
  const [movieList, setMovieList] = useState([""]);
  const [modal1, setModal1] = useState(false);

  const optionsDataset = () => {
    return axios
      .get("https://omdbapi.com/?apikey=715289b&s=batman&page=2")
      .then((res) => {
        console.log(res.data.Search);
        let data = res.data.Search;
        let movieData = [];
        for (let i = 0; i < data.length; i++) {
          movieData.push({ value: data[i], label: data[i] });
        }
        setMovieList(movieData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    optionsDataset();
  }, []);

  const toggle1 = () => setModal1(!modal1);

  console.log("ini listnya", movieList);

  return (
    <Container>
      <Col sm='12'>
      <MDBCol md="6">
        <MDBInput
          hint="Search"
          type="text"
          containerClass="active-black active-pink-2 mt-0 mb-3"
        />
      </MDBCol>

      {movieList.map((e) => {
        return (
          <tr className="table-row">
            <td className="py-1 d-grid gap-2">
              <Button
                color="outline-dark"
                onClick={toggle1}
                style={{ justifyContent: "center" }}
              >
                {e.label.Title}
              </Button>
            </td>
          </tr>
        );
      })}
      
      {movieList.map((e) => {
        return (
          <Modal isOpen={modal1} toggle={toggle1} className={modal1}>
            <ModalHeader toggle={toggle1}>{e.label.Title}</ModalHeader>
            <ModalBody>
              <img src={e.label.Poster} alt="new" />
            </ModalBody>
            <ModalBody>
              <td>Type : {e.label.Type}</td>
            </ModalBody>
            <ModalBody>
              <td>Year : {e.label.Year}</td>
            </ModalBody>
            <ModalBody>
              <td>imdbID: {e.label.imdbID}</td>
            </ModalBody>
          </Modal>
        );
      })}
      </Col>
    </Container>
  );
};

export default Task2;
