import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import {InputAdornment, TextField} from "@mui/material";
import NumberFormat from "react-number-format";


const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
});

export default function Home() {
    const price = 379600000;
    const option = 25476000;
    const transferRate = 77;
    const commissionRate = 0.4;
    const acquisitionRate = 1;
    const [payment, setPayment] = React.useState(0);

    const [premium, setPremium] = React.useState('');

    const [firstTransfer, setFirstTransfer] = React.useState(0);
    const [secondTransfer, setSecondTransfer] = React.useState(0);
    const [commission, setCommission] = React.useState(0);
    const [acquisition, setAcquisition] = React.useState(0);
    const [realPremium, setRealPremium] = React.useState(0);
    const [budget, setBudget] = React.useState(0);
    const [house, setHouse] = React.useState(0);

    useEffect(() => {
        setFirstTransfer(Math.round(Math.max(premium-2500000, 0)*transferRate/100));
        setCommission(Math.round((price+option)*commissionRate/100));
        setAcquisition(Math.round((price+option)*acquisitionRate/100));
        setPayment((price+option)*0.1);
    }, [premium, transferRate, commissionRate, acquisitionRate, price, option])
    useEffect(() => {
        setSecondTransfer(Math.round(firstTransfer*transferRate/100));
    }, [firstTransfer, transferRate])
    useEffect(() => {
        setRealPremium(Number(firstTransfer)+Number(secondTransfer)
            +Number(commission)+Number(acquisition)+Number(premium));
    }, [firstTransfer, secondTransfer, commission, acquisition, premium])
    useEffect(() => {
        setBudget(Number(realPremium)+Number(payment));
        setHouse((price+option+realPremium));
    }, [realPremium, payment, price, option])
    const changePremium = (event) => {
        setPremium(event.target.value);
    }
    return (
        <div>
            <Link to="dsr">Link</Link>
            <h3>?????? ????????? ???</h3>
            <Box
                sx={{
                    padding: 2
                }}
            >
                <TextField
                    label="?????????"
                    variant="outlined"
                    defaultValue={price}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
                <TextField
                    label="?????????"
                    variant="outlined"
                    defaultValue={option}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
                <TextField
                    label="?????????"
                    variant="outlined"
                    value={payment}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
            </Box>
            <Box
                sx={{
                    padding: 2
                }}
            >
                <TextField
                    label="????????????"
                    variant="outlined"
                    defaultValue={transferRate}
                    disabled
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>
                    }}
                />
                <TextField
                    label="??????????????????"
                    variant="outlined"
                    defaultValue={commissionRate}
                    disabled
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>
                    }}
                />
                <TextField
                    label="????????????"
                    variant="outlined"
                    defaultValue={acquisitionRate}
                    disabled
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>
                    }}
                />
            </Box>
            <h3>?????? ??????</h3>
            <Box
                sx={{
                    padding: 2
                }}
            >
                <TextField
                    label="????????????(??????)"
                    variant="outlined"
                    value={premium}
                    onChange={changePremium}
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
            </Box>
            <h3>?????? ???</h3>
            <Box
                sx={{
                    padding: 2
                }}
            >
                <TextField
                    label="1??? ???????????????"
                    variant="outlined"
                    value={firstTransfer}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
                <TextField
                    label="2??? ???????????????"
                    variant="outlined"
                    value={secondTransfer}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
                <TextField
                    label="?????????"
                    variant="outlined"
                    value={commission}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
                <TextField
                    label="?????????"
                    variant="outlined"
                    value={acquisition}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
            </Box>
            <h3>?????? ??????</h3>
            <Box
                sx={{
                    padding: 2
                }}
            >
                <TextField
                    label="?????? ????????????"
                    variant="outlined"
                    value={realPremium}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
                <TextField
                    label="??? ????????????"
                    variant="outlined"
                    value={budget}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
                <TextField
                    label="???????????? ????????? ??????????"
                    variant="outlined"
                    value={house}
                    disabled
                    name="numberformat"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                        endAdornment: <InputAdornment position="end">???</InputAdornment>
                    }}
                />
            </Box>
        </div>
    );
}