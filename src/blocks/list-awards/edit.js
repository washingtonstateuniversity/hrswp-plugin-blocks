/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';
import {
	Button,
	PanelBody,
	Placeholder,
	RangeControl,
	SelectControl,
	Spinner,
	ToggleControl,
} from '@wordpress/components';

export default function ListAwardsEdit( { attributes, setAttributes } ) {
	const { columns, imageCrop, queryTable } = attributes;
	const { fetchData, tables, currentPostId } = useSelect(
		( select ) => {
			const { importAwardsData, getTableNames } =
				select( 'hrswp/blocks' );
			const { getCurrentPostId } = select( 'core/editor' );

			return {
				fetchData: importAwardsData,
				tables: getTableNames(),
				currentPostId: getCurrentPostId(),
			};
		},
		[ queryTable ]
	);

	const handleFetchAwards = () => {
		fetchData( queryTable, currentPostId );
	};
	const getQueryTables = () => {
		if ( ! tables?.length ) {
			return [];
		}
		return tables?.reduce( ( accumulator, currentValue ) => {
			if (
				currentValue.value.includes( 'award' ) ||
				'' === currentValue.value
			) {
				accumulator.push( currentValue );
			}
			return accumulator;
		}, [] );
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Display settings' ) }>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns || 3 }
						onChange={ ( value ) =>
							setAttributes( { columns: value } )
						}
						min={ 1 }
						max={ 6 }
					/>
					<ToggleControl
						label={ __( 'Crop Images' ) }
						checked={ imageCrop }
						onChange={ ( value ) =>
							setAttributes( { imageCrop: value } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Select Awards data source' ) }>
					<SelectControl
						className={ 'awards-data-table-picker__select' }
						label={ __( 'Select Awards Data source' ) }
						value={ queryTable }
						options={ getQueryTables() }
						onChange={ ( value ) =>
							setAttributes( { queryTable: value } )
						}
					/>
					<Button variant="secondary" onClick={ handleFetchAwards }>
						Fetch
					</Button>
				</PanelBody>
			</InspectorControls>
			{ ! queryTable && (
				<Placeholder icon="admin-post" label={ __( 'Awards Data' ) }>
					{ ! Array.isArray( tables ) ? (
						<Spinner />
					) : (
						__( 'Select an awards data group to display results.' )
					) }
				</Placeholder>
			) }
			<ServerSideRender
				block="hrswp/list-awards"
				attributes={ attributes }
			/>
		</div>
	);
}
