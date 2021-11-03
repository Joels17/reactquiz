switch(province){
   case "ONTARIO":
      rate = ONTARIO_RATE;
      break;
   case "QUEBEC":
      rate = QUEBEC_RATE;
      points = 2;
      break;
   case "ALBERTA":
      rate = ALBERTA_RATE;
      break;
   default:
      rate = 1;
}
amt = base * rate;
calc = 2 * basis(amt) + extra(amt) * 1.05;

 