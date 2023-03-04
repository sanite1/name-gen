
import * as React from 'react';
import Box from '@mui/material/Box';
import Man from '@mui/icons-material/Man';
import Woman from '@mui/icons-material/Woman';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import api from "../api/names";

const HomeBody = (props) => {

    const [nationality, setNationality] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [gottenData, setGottenData] = React.useState(false);
    const [data, setData] = React.useState("");
    
    const [genderIsEmpty, setGenderIsEmpty] =  React.useState(false)
    const [middleNameIsEmpty, setMiddleNameIsEmpty] =  React.useState(false)
    const [namtionalityIsEmpty, setNamtionalityIsEmpty] =  React.useState(false)

    const nationalityOptions = ['en', 'it', 'nl', 'uk', 'de', 'jp', 'es', 'fr', "au"];

    const onNationalityOptionClick = (pos) => {
        console.log(pos);
        console.log("N Before: " + nationality);
        if(pos === 3 || pos === 4 || pos === 5 || pos === 6 || pos === 8) {
            setNationality((prevState) => prevState)
        } else {
            setNationality(pos);
        }
        console.log("N after: " + nationality);
    }
    
    const nToggler = nationalityOptions.map((item, pos) => {
        if (pos === nationality) {
            // setSelected(true)
            if(pos === 3 || pos === 4 || pos === 5 || pos === 6 || pos === 8) {
                return(
                    <Box
                        key={pos}
                        onClick={() => onNationalityOptionClick(pos)}
                        className={`item disabledItem`}
                    >
                        {item}
                    </Box>
                );
            }
            return(
                <Box
                    key={pos}
                    onClick={() => onNationalityOptionClick(pos)}
                    className={`item selectedItem`}
                >
                    {item}
                </Box>
            );
        }
        if(pos === 3 || pos === 4 || pos === 5 || pos === 6 || pos === 8) {
            return(
                <Box
                    key={pos}
                    onClick={() => onNationalityOptionClick(pos)}
                    className={`item disabledItem`}
                >
                    {item}
                </Box>
            );
        }

        return(
            <Box
                key={pos}
                onClick={() => onNationalityOptionClick(pos)}
                className={`item`}
            >
                {item}
            </Box>
        );
    });
    
    const genderOptions = ["male", "female"];

    const onGenderOptionClick = (pos) => {
        console.log(pos);
        console.log("N Before: " + gender);
        setGender(pos);
        console.log("N after: " + gender);
    }
    
    const gToggler = genderOptions.map((item, pos) => {
        if (pos === gender) {
            // setSelected(true)
            return(
                <Box
                    key={pos}
                    onClick={() => onGenderOptionClick(pos)}
                    className={`item selectedItem`}
                >
                    {item}
                </Box>
            );
        }
        return(
            <Box
                key={pos}
                onClick={() => onGenderOptionClick(pos)}
                className={`item`}
            >
                {item}
            </Box>
        );
    });

    const middleNAmeOptions = ["TRUE", "FALSE"];

    const onMiddleNameOptionClick = (pos) => {
        console.log(pos);
        console.log("N Before: " + middleName);
        setMiddleName(pos);
        console.log("N after: " + middleName);
    }
    
    const mToggler = middleNAmeOptions.map((item, pos) => {
        if (pos === middleName) {
            // setSelected(true)
            return(
                <Box
                    key={pos}
                    onClick={() => onMiddleNameOptionClick(pos)}
                    className={`item selectedItem`}
                >
                    {item}
                </Box>
            );
        }
        return(
            <Box
                key={pos}
                onClick={() => onMiddleNameOptionClick(pos)}
                className={`item`}
            >
                {item}
            </Box>
        );
    });

    const onFormSubmit = async () => {
        // e.preventDefault()
        
        if(gender === "") {
            setGenderIsEmpty(true)
        } else {
            setGenderIsEmpty(false)
        }
        if(nationality === "") {
            setNamtionalityIsEmpty(true)
        } else {
            setNamtionalityIsEmpty(false)
        }
        if(middleName === "") {
            setMiddleNameIsEmpty(true)
        } else {
            setMiddleNameIsEmpty(false)
        }
        if(!(gender === "" || nationality === "" || middleName === "")) {

            const data = {
                nationality: nationality,
                gender: gender,
                middleName: middleName
            }
            try {
                const response = await api.post("/api/submit", data)
                setGottenData(true)
                setData(response.data.name)
            } catch(err) {
                if(err.response) {
                    console.log("Error: " + err.response);
                }
            }
        }

    }

    React.useEffect(() => {
        setGottenData(false)
    }, [nationality, gender, middleName])

    const requiredMsg = () => {
        return (
            <p className='requiredMsg'>This field is required!</p>
        )
    }

    return ( 
        <div className="">
            <h1>Name Generator</h1>
            <div className="home-body">
                <div className="sec1">
                    <h3>Nationality</h3>
                    <div className="options">
                        {nToggler}
                    </div>
                    {namtionalityIsEmpty ? requiredMsg() : ""}
                    <h3>Gender</h3>
                    <div className="options">
                        {gToggler}
                    </div>
                    {genderIsEmpty ? requiredMsg() : ""}
                    <h3>Middle Name</h3>
                    <div className="options">
                        {mToggler}
                    </div>
                    {middleNameIsEmpty ? requiredMsg() : ""}
                    <form action="/api/submit" method='POST'>
                        <input type="hidden" name="nationality" value={nationality} />
                        <input type="hidden" name="gender" value={gender} />
                        <input type="hidden" name="middleName" value={middleName} />
                        <button type="button" onClick={onFormSubmit} className='submitBtn'>SUBMIT</button>
                    </form>
                </div>
                <div className="sec2">

                    {
                        gottenData ? 
                        <div className="">
                            { 
                                gender === 0 ?
                                <Man 
                                    className="icon"
                                    sx={{ fontSize: "200px" }}   
                                    // fontSize="large"
                                /> 
                                : 
                                <Woman 
                                    className="icon"
                                    sx={{ fontSize: "200px" }}  
                                />
                            }
                            <p className='name'>
                            {!data ? "Loading..." : data}
                            </p>
                        </div>  
                        : 
                        <div className="skeleton">
                            <Stack spacing={1}>
                                <Skeleton variant="rectangular" height={200} className="circularSkeleton"/>
                                <Skeleton variant="rectangle" height={30} className="rectangularSkeleton"/>
                            </Stack>
                        </div>          
                    }
                </div>
            </div>
        </div>
    );
}
 
export default HomeBody;