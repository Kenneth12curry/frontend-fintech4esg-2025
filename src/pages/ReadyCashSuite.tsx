import LendingSolutions from "@/components/LendingSolutions";
import ProductsCash from "@/components/ProductsCash";
import ProductFeatures from "@/components/ProductsFeatures"
import UssdSimulator from "@/components/UssdSimulator";

export default function ReadyCashSuite() {
    return(
    <>
        <ProductsCash />
        <ProductFeatures />
        <LendingSolutions />
        <UssdSimulator />
    </>);
}