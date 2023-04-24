import { ConfigProvider } from 'antd'
import Header from 'components/Header'
import NotFound from 'components/NotFound'
import { CatalogueItemProvider } from 'context/CatalogueItemContext'
import { FilterProvider } from 'context/FilterContext'
import { SearchProvider } from 'context/SearchContext'
import { CatalogueItemPage, CataloguePage, LandingPage } from 'pages'
import LoadCatalog from 'pages/LoadCatalog'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HOME_PATH from './constants'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#24295c',
						colorPrimaryBg: '#d3d4de',
						colorLinkHover: '#24295c',
						lineHeightLG: 1.39
					}
				}}
			>
				<Header />
				<CatalogueItemProvider>
					<FilterProvider>
						<SearchProvider>
							<Routes>
								<Route path={`${HOME_PATH}/`} element={<LandingPage />} />
								<Route
									path={`${HOME_PATH}/loadcatalog`}
									element={<LoadCatalog />}
								/>
								<Route path={`${HOME_PATH}/catalogue`}>
									<Route index element={<CataloguePage />} />
									<Route path=':id' element={<CatalogueItemPage />} />
									<Route path='*' element={<NotFound />} />
								</Route>
								<Route path='*' element={<NotFound />} />
							</Routes>
						</SearchProvider>
					</FilterProvider>
				</CatalogueItemProvider>
			</ConfigProvider>
		</BrowserRouter>
	)
}
