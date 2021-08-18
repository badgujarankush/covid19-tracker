import numeral from "numeral";
export const sortData = (data)=>{
    const sortedData = [...data];
    sortedData.sort((a,b) => a.active > b.active? -1:1);
    return sortedData;
}

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
