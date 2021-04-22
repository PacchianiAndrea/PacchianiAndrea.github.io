import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(()=>({
    root:{
        maxWidth: '100%',
    },
    media:{
        paddingTop: '25%',  //16:9
        paddingLeft: '20px',
        width: '500px',
        height: "auto",
        
    },
    container:{
        marginTop: '20%',
        maxWidth: "50%"
        
    },
    button:{
        display: "flex",
        border:"1px solid red",
        fontSize: "25px"
    },
    mainProd:{
        height: "400px"
    },
    bottoni:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    descrizione:{
        fontSize:"20px"
    }

    
}));