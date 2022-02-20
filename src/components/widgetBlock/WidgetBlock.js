import WidgetTemplate from "./WidgetTemplate";
import Weather from "./widgets/Weather";
import Popular from "./widgets/Popular";
import MapWidget from "./widgets/MapWidget";
import TvProgram from "./widgets/TvProgram";
import Broadcast from "./widgets/Broadcast";

export default function WidgetsBlock(props) {
	const { weather, popular, mapData, program, broadcast } = props;

	return (
		<div className="widgets-block">
			<WidgetTemplate title="Погода">
				<Weather data={weather} />
			</WidgetTemplate>

			<WidgetTemplate title="Посещаемое">
				<Popular data={popular} />
			</WidgetTemplate>
			
			<WidgetTemplate title="Карта Германии">
				<MapWidget data={mapData} />
			</WidgetTemplate>
			
			<WidgetTemplate title="Телепрограмма">
				<TvProgram data={program} />
			</WidgetTemplate>
			
			<WidgetTemplate title="Эфир">
				<Broadcast data={broadcast} />
			</WidgetTemplate>
		</div>
	)
}