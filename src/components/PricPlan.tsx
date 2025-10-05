import { CapitalText } from "../styles/global"
import { PricePlanItem } from "./PricePlanItem"




export const PricePlan = () => {
    return (
        <>
        <CapitalText size={45}>наши тарифы</CapitalText>
        <PricePlanItem/>
        </>
    )
}