export const styles = {
    homeContainer: {
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: "url('/images/background_img.png')",
      backgroundSize: "cover",
      backgroundPosition: "center calc(100% + 70px)",
      backgroundRepeat: "no-repeat",
      width:"100%",
      minHeight: "100vh",
    },
    otherElements:{
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "center", 
      width:"55%",
      flexGrow: "1",
      marginTop:"-100px"
    },
    quickLineUpButton:{
      display: "flex",
      width: "400px",
      marginTop: "50px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50px",
      padding:"20px",
      color:"white",
      fontSize:"18px"
    }
};