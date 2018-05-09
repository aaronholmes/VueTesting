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

    it ('can delete items', () => {
        addReminder('reminder 1');
        addReminder('reminder 2');

        let deleteButton = wrapper.find('ul > li:first-child .delete');

        deleteButton.trigger('click');

        expect(wrapper.find('ul').text()).not.toContain('reminder 1');
        expect(wrapper.find('ul').text()).toContain('reminder 2');
    })

    function addReminder(data) {
        let newReminder = wrapper.find('.new-reminder');

        newReminder.element.value = data;
        newReminder.trigger('input');

        wrapper.find('button').trigger('click');
    }
})