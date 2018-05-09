import { mount } from 'vue-test-utils';
import expect  from 'expect';
import Reminders from '../src/components/Reminders.vue';

describe ('Reminders', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(Reminders);
    })

    it ('hides the reminders list if there are none', () => {
        expect(wrapper.contains('ul')).toBe(false);
    });

    it ('can add items', () =>{

        let data = 'This is a new reminder';

        addReminder(data);

        expect(wrapper.find('ul').text()).toContain(data);
    })

    function addReminder(data) {
        let newReminder = wrapper.find('.new-reminder');

        newReminder.element.value = data;
        newReminder.trigger('input');

        wrapper.find('button').trigger('click');
    }
})