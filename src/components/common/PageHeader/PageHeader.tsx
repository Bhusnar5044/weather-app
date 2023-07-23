import { Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { FC, memo, useCallback, useState } from 'react';
import { Props } from './types';

export const PageHeader: FC<Props> = memo(({ title, showDatePicker }) => {
    const [date, setDate] = useState('');

    const handleDateChange = useCallback(
        (value: Date | null) => {
            value && setDate(value.toDateString());
        },
        [setDate],
    );

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
            <Typography variant="h4" fontWeight={600}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
                {showDatePicker && (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={(date && new Date(date)) || null}
                            onChange={handleDateChange}
                            label={'"month" and "year"'}
                            views={['month', 'year']}
                        />
                    </LocalizationProvider>
                )}
            </Box>
        </Box>
    );
});

PageHeader.displayName = 'PageHeader';
