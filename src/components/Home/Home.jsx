import React from "react";
import Allusers from "../../Utilities/Allusers/Allusers";
import Category from "../../Utilities/Category/Category";
import CirculerBar from "../Charts/CirculerBar";
import Column from "../Charts/Column";
import WorldMap from "../Charts/WorldMap";
import styles from "./Home.module.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Home() {
  const [open, setOpen] = React.useState(false);
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Navbar />
      <section className={styles.homepage}>
        <div className={styles.title}>WSTF FRONT-END HACKATHON</div>
        <Allusers />
        <Category />
        <div className={styles.circulerbar}>
          <CirculerBar />
          <CirculerBar />
        </div>
        <div className={styles.columnchart}>
          <div
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
              paddingLeft: "30px",
              width: "10%",
              textAlign: "left",
            }}
          >
            <p onClick={handleClickOpen} style={{cursor: "pointer"}}>Sales Figures</p>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Sales Figures"}
              </DialogTitle>
              <DialogContent>
              </DialogContent>
            </Dialog>
            <h5>$10,430</h5>
          </div>
          <div style={{ width: "90%" }}>
            <Column />
          </div>
        </div>
        <section className={styles.worldmap}>
          <WorldMap />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Home;
