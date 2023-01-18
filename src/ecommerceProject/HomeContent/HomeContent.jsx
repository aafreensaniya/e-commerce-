import {
  Card,
  CardContent,
  Grid,
  Badge,
  Rating,
  TextField,
} from "@mui/material";
import { width } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const HomeContent = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [oriData, setOriData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
    setOriData(result.data);
  };
  useEffect(() => {
    const filtered = oriData.filter((elem) =>
      elem.title.toLowerCase().includes(text.toLowerCase())
    );
    setData(filtered);
  }, [text]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <input
            placeholder="Search Here..."
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        {data.map((elem, index) => {
          return (
            <React.Fragment>
              <Grid item xs={3}>
                <Card>
                  <CardContent>
                    <Grid container spacing={2} align="center">
                      <Grid item xs={12}>
                        <Badge
                          badgeContent={"$" + elem.price}
                          color="primary"
                          max={999}
                        >
                          <img src={elem.image} width="150" height="180" />
                        </Badge>
                      </Grid>
                      <Grid item xs={12}>
                        <strong>
                          {elem.title.slice(0, 19).trim() + "..."}
                        </strong>
                      </Grid>
                      <Grid item xs={12}>
                        {elem.description.slice(0, 70).trim() + "..."}
                      </Grid>
                      <Grid item xs={8}>
                        <Rating value={elem.rating.rate} />
                      </Grid>
                      <Grid item xs={4}>
                        <strong>{`(${elem.rating.count})`}</strong>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
