
var count=0;
function calculate(WeightKg,HeightCm)
{
   let bmiCatagoty;
    let helthRisk;
    let bmiRange;
    let temp=HeightCm/100;
   let ans=((WeightKg)/((temp*temp)));
   console.log(ans);
   if(ans<=18.4)
   {
       bmiCatagoty="UnderWeight";
       helthRisk="Malnutrition risk";
       bmiRange="18.4 and below";
   }
   else if(ans>=18.5 && ans<=24.9 )
   {
      bmiCatagoty="Normal weight";
      helthRisk="Low risk";
      bmiRange="18.5-24.9";
   }
   else if(ans>=25 && ans<=29.9 )
   {
      bmiCatagoty="Overweight";
      helthRisk="Enhanced risk";
      bmiRange="25-29.9";
      count++;
   }
   else if(ans>=30 && ans<=34.9 )
   {
      bmiCatagoty="Moderately obese";
      helthRisk="Medium risktion";
      bmiRange="30-34.9";

   }
   else if(ans>=35 && ans<=39.9 )
   {
      bmiCatagoty="Severely obese";
      helthRisk="High risk";
      bmiRange="35-39.9";
   }
   else
   {
      bmiCatagoty="Very severely obese";
      helthRisk="Very high risk";
      bmiRange="40 and above";
   }
  console.log("Total number of overweight people is: "+ count); 
  console.log(bmiCatagoty+" "+bmiRange+" "+helthRisk);
  return ans;
}
  module.exports = calculate;