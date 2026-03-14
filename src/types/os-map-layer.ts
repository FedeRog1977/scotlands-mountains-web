// https://docs.os.uk/os-apis/accessing-os-apis/os-maps-api/layers-and-styles

type Type = 'Road' | 'Outdoor' | 'Light' | 'Leisure';

type CoordinateSystem = '3857' | '27700';

export type OSMapLayer = `${Type}_${CoordinateSystem}`;
