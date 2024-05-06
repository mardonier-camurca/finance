import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { 
    Container,  
    ButtonFilterText, 
    ModalContent,
    ButtonFilter
} from './styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }){
    const[dateNow, setDateNow] = useState(new Date());
    const[markeddates, setMarkeddates] = useState({});

    function handleOnDayPress(date){
        setDateNow(new Date(date.dateString));
        let markedDay = {};
        markedDay[date.dateString] = {
            selected: true,
            selectedcolor: '#3b3bbf',
            textColor: '#FFF'
        }
        setMarkeddates(markedDay)
    }

    function handleFilterDate (){
        handleFilter(dateNow);
        setVisible();
    }
    
    return(
        <Container>
            <TouchableWithoutFeedback onPress={setVisible}>
                <View style={{ flex: 1}}></View>
            </TouchableWithoutFeedback>
            <ModalContent>
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markeddates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#FF0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#FFF'
                    }}
                />
                <ButtonFilter onPress={handleFilterDate}>
                    <ButtonFilterText>Filtrar</ButtonFilterText>
                </ButtonFilter>
            </ModalContent>
        </Container>
    )
}
