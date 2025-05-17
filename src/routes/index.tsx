import { createStackNavigator } from "@react-navigation/stack";
import { Signin } from "../screen/Signin";
import { Signup } from "../screen/Signup";
import { SignupTeacher } from "../screen/SignupTeacher";
import { SignupSearch } from "../screen/SignupSearch";

const {Navigator, Screen} = createStackNavigator();

export function Routes() {
    return(
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen name="Login" component={Signin}/>
            <Screen name="Signup" component={Signup}/>
            <Screen name="SignupTeacher" component={SignupTeacher}/>
            <Screen name="SignupSearch" component={SignupSearch}/>
        </Navigator>
    );
}