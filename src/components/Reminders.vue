<template>
    <div>
        <input class="new-reminder" v-model="newReminder">
        <button @click="addReminder">Add Reminder</button>

        <ul v-if="reminders.length">
            <li v-for="(reminder, index) in reminders">
                {{reminder}}
                <button class="delete" @click="removeReminder(reminder, index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newReminder: "",
                reminders: []
            }
        },
        methods: {
            addReminder() {
                this.reminders.push(this.newReminder);
                this.newReminder = '';
            },
            removeReminder(reminder, index) {
                this.reminders.splice(index, 1);
            }
        }
    }
</script>