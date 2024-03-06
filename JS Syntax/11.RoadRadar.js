function PrintDrivingStatus(speed, area)
{
    let result="";
    let status="";
    let speedLimit=0;
    let difference=0;
    switch(area)
    {
        case "motorway":
            speedLimit=130;
            difference=speed-speedLimit;
            if(speed<speedLimit)
            {
                result=`Driving ${speed} km/h in a ${speedLimit} zone`
            }
            else if(speed>speedLimit && speed<=speedLimit+20)
            {
                status="speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else if(speed>speedLimit+20 && speed<=speedLimit+40)
            {
                status="excessive speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else 
            {
                status="reckless driving"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
        case "interstate":
            speedLimit=90;
            difference=speed-speedLimit;
            if(speed<speedLimit)
            {
                result=`Driving ${speed} km/h in a ${speedLimit} zone`
            }
            else if(speed>speedLimit && speed<=speedLimit+20)
            {
                status="speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else if(speed>speedLimit+20 && speed<=speedLimit+40)
            {
                status="excessive speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else 
            {
                status="reckless driving"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
        case "city":
            speedLimit=50;
            difference=speed-speedLimit;
            if(speed<speedLimit)
            {
                result=`Driving ${speed} km/h in a ${speedLimit} zone`
            }
            else if(speed>speedLimit && speed<=speedLimit+20)
            {
                status="speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else if(speed>speedLimit+20 && speed<=speedLimit+40)
            {
                status="excessive speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else 
            {
                status="reckless driving"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
        case "residential":
            speedLimit=20;
            difference=speed-speedLimit;
            if(speed<speedLimit)
            {
                result=`Driving ${speed} km/h in a ${speedLimit} zone`
            }
            else if(speed>speedLimit && speed<=speedLimit+20)
            {
                status="speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else if(speed>speedLimit+20 && speed<=speedLimit+40)
            {
                status="excessive speeding"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            else 
            {
                status="reckless driving"
                result=`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
            }
            break;
    }
    console.log(result);
}