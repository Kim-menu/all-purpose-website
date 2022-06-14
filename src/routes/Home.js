import React, {useEffect} from "react";
import NumberFormat from "react-number-format";
import {Link} from "react-router-dom";

export default function Home() {
    const [price, setPrice] = React.useState(379600000);
    const [option, setOption] = React.useState(25476000);
    const [payment, setPayment] = React.useState();
    const [transferRate, setTrasferRate] = React.useState(77);
    const [commissionRate, setCommissionRate] = React.useState(0.4);
    const [acquisitionRate, setAcquisitionRate] = React.useState(1);

    const [premium, setPremium] = React.useState();

    const [firstTransfer, setFirstTransfer] = React.useState();
    const [secondTransfer, setSecondTransfer] = React.useState();
    const [commission, setCommission] = React.useState();
    const [acquisition, setAcquisition] = React.useState();
    const [realPremium, setRealPremium] = React.useState();
    const [budget, setBudget] = React.useState();
    const [house, setHouse] = React.useState();

    useEffect(() => {
        setFirstTransfer(Math.round(Math.max(premium-2500000, 0)*transferRate/100));
        setCommission(Math.round((price+option)*commissionRate/100));
        setAcquisition(Math.round((price+option)*acquisitionRate/100));
        setPayment((price+option)*0.1);
    }, [premium])
    useEffect(() => {
        setSecondTransfer(Math.round(firstTransfer*transferRate/100));
    }, [firstTransfer])
    useEffect(() => {
        setRealPremium(Number(firstTransfer)+Number(secondTransfer)
            +Number(commission)+Number(acquisition)+Number(premium));
    }, [secondTransfer])
    useEffect(() => {
        setBudget(Number(realPremium)+Number(payment));
        setHouse((price+option+realPremium));
    }, [realPremium])
    const changePremium = (event) => {
        setPremium(event.target.value.replace(/,/g, ''));
    }
    return (
        <div>
            <h3>사전 정의된 값은 이렇답니다!</h3>
            <Link to="dsr">Link</Link>
            <div>
                <label>분양가 </label>
                <NumberFormat
                    value={price}
                    id="price"
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>옵션가 </label>
                <NumberFormat
                    value={option}
                    id="option"
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>계약금 </label>
                <NumberFormat
                    value={payment}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>양도세율 </label>
                <NumberFormat
                    value={transferRate}
                    id="transferRate"
                    suffix="%"
                    disabled
                /><br/>
                <label>중개수수료율 </label>
                <NumberFormat
                    value={commissionRate}
                    id="commissionRate"
                    suffix="%"
                    disabled
                /><br/>
                <label>취득세율 </label>
                <NumberFormat
                    value={acquisitionRate}
                    id="acquisitionRate"
                    suffix="%"
                    disabled
                />
            </div>
            <h3>원하는 정도의 손피를 입력하세요!</h3>
            <div>
                <label>프리미엄(손피) </label>
                <NumberFormat
                    value={premium}
                    id="premium"
                    placeholder="프리미엄(손피)"
                    thousandSeparator={true}
                    onChange={changePremium}
                />
            </div>
            <h3>계산 값들은 아래와 같아요!</h3>
            <div>
                <label>1차 양도소득세 </label>
                <NumberFormat
                    value={firstTransfer}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>2차 양도소득세 </label>
                <NumberFormat
                    value={secondTransfer}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>중개료 </label>
                <NumberFormat
                    value={commission}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>취득세 </label>
                <NumberFormat
                    value={acquisition}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
            </div>
            <h3>진짜 중요한 값은 아래의 값이죠!</h3>
            <div>
                <label>실질 프리미엄 </label>
                <NumberFormat
                    className="important"
                    value={realPremium}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>총 필요 금액 </label>
                <NumberFormat
                    value={budget}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                /><br/>
                <label>주택 매수가격 </label>
                <NumberFormat
                    value={house}
                    thousandSeparator={true}
                    suffix="₩"
                    disabled
                />
            </div>
        </div>
    );
}