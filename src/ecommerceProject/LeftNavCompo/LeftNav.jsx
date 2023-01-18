import { CardContent,Card,Grid } from '@mui/material'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export const LeftNav = () => {
    const [categ, setCateg] = useState([
      "grocery",
      "faishon",
      "electronics",
      "appliances",
      "mobiles",
    ]);

  return (
    <React.Fragment>
          <Grid container spacing={2}>
            {categ.map((item) => {
              return (
                <React.Fragment>
                  <Grid item xs={4}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card>
                        <CardContent>{item}</CardContent>
                      </Card>
                    </Link>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
    </React.Fragment>
  );
}
