import React from "react";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ListingExternal from './ListingExternal';
import ListingInternal from './ListingInternal';
import Analysis from './Analysis';

const App = () => {
	const [value, setValue] = React.useState(2);

	return (
		<div>
			<Paper square>
				<Tabs
					value={value}
					textColor="primary"
					indicatorColor="primary"
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<Tab label="External" />
					<Tab label="Internal" />
				</Tabs>
			</Paper>
			{value == 0 ?
			    <div style={{display:'flex'}}>
                    <ListingExternal/>
                    <Analysis/>
                </div>
                 :
                 <div style={{display:'flex'}}>
                    <ListingInternal/>
                    <Analysis/>
                </div>
			}
		</div>
	);
};

export default App;
