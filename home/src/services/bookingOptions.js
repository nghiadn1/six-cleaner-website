export const bookingOptions = {
    regularHouse: {
        label: 'Dịch vụ giúp việc',
        durations: [
            { label: '2 giờ\n55m²\n2 phòng', value: 2, price: 188000 },
            { label: '3 giờ\n85m²\n3 phòng', value: 3, price: 233000 },
            { label: '4 giờ\n105m²\n4 phòng', value: 4, price: 300000 },
        ],
        packages: [
            { label: '1 Tháng', customPrices: { 2: 750000, 3: 950000, 4: 1000000 } },
            { label: '2 Tháng', customPrices: { 2: 1500000, 3: 2000000, 4: 2500000 } },
            { label: '3 Tháng', customPrices: { 2: 2500000, 3: 3000000, 4: 3500000 } },
        ],
    },

    office: {
        label: 'Dọn dẹp văn phòng',
        durations: [
            { label: '2 giờ\n~200m²', price: 300000 },
            { label: '3 giờ\n~400m²', price: 500000 },
            { label: '4 giờ\n~900m²', price: 700000 },
        ],
        packages: [],
    },

    washing: {
        label: 'Vệ sinh máy giặt',
        optionLabel: 'Loại máy giặt',
        optionDescription: 'Chọn loại máy giặt',

        packageLabel: 'Khối lượng lồng giặt',
        packageDescription: 'Chọn khối lượng lồng giặt',

        durations: [
            { label: 'Cửa trên' },
            { label: 'Cửa trước' },
        ],
        packages: [
            { label: 'Dưới 9Kg', price: 600000 },
            { label: 'Trên 9Kg', price: 700000 },
        ],
    },


    carpet: {
        label: 'Vệ sinh thảm',
        durations: [
            { label: 'Size S (<1.5m)', price: 300000 },
            { label: 'Size M (1.5 - 2m)', price: 350000 },
            { label: 'Size L (2 - 2.5m)', price: 400000 },
            { label: 'Size XL (2.5 - 3m)', price: 450000 },
        ],
        packages: [],
    },

    mattress: {
        label: 'Vệ sinh nệm',
        durations: [
            { label: 'Dưới 1.5m', price: 300000 },
            { label: 'Trên 1.6m', price: 400000 },
        ],
        packages: [],
    },
};
  