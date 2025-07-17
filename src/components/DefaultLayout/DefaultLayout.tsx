import { useTheme } from "@mui/material";
import { LayoutContainer, LayoutWrapper } from "./styled";

interface DefaultLayoutProps {
	children?: React.ReactNode;
	padding?: string;
	bgcolor?: string;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
	children,
	padding,
	bgcolor,
	...rest
}) => {
	const theme = useTheme();
	return (
		<LayoutWrapper
			paddingTop={`${padding}`}
			paddingBottom={`${padding}`}
			sx={{
				backgroundColor: bgcolor || theme.palette.background.default,
			}}
			{...rest}
		>
			<LayoutContainer>{children}</LayoutContainer>
		</LayoutWrapper>
	);
};
