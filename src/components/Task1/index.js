import React from "react";
import { Container, Col, Card } from "reactstrap";

const Task1 = () => {

  const listanagram = ['kita, ', 'atik, ', 'tika, ', 'aku, ', 'kia, ', 'makan, ', 'kua, ']

  var groupanagram = function(strs) {
    let hash = {};

    for(let str of strs) {
      let sorted_str = str.split('').sort().join('');
      if (!hash[sorted_str]){
        hash[sorted_str] = [str];
      } else {
        hash[sorted_str].push(str);
      }
    }
    return Object.values(hash)
  }
  console.log(groupanagram(listanagram))

  return (
    <Container>
      <Col>
      List of string Anagram group dari <br/> ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'] :
      
      <Card  style={{
                  Maxwidth: "20rem",
                  height: "auto",
                  borderRadius: 8,
                }}>
      [{groupanagram(listanagram)[0]}] <br/>
      [{groupanagram(listanagram)[1]}] <br/>
      [{groupanagram(listanagram)[2]}] <br/>
      [{groupanagram(listanagram)[3]}] <br/>
      </Card>
      
      </Col>
    </Container>
  );
};

export default Task1;
