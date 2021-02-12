<template>
  <div class="container">
    <div class="userName">
      Login: <strong>{{ userName }}</strong>
    </div>
    <div class="todo">
      <h2>My ToDo List</h2>
      <div class="inputContainer">
        <input
          type="text"
          class="mainInput"
          v-model="newItem"
          @keydown.enter="addItem"
        />
        <button class="add" @click="addItem">Add</button>
      </div>
      <div class="listItems">
        <ul v-if="items.length > 0">
          <li v-for="(item, index) in items" :key="index">
            <span
              class="textItem"
              @dblclick="onEditMode(index)"
              v-if="editMode !== index"
              >{{ item }}</span
            >
            <input
              class="editInput"
              type="text"
              v-else
              :value="item"
              @blur="addEditItem(index, $event)"
              @keydown.enter="addEditItem(index, $event)"
              autofocus
            />
            <button class="removeItem" @click="removeItem(index)">X</button>
          </li>
        </ul>
        <span v-else>You have no records</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  components: {},
  data() {
    return {
      userName: localStorage.name,
      newItem: "",
      items: [],
      editMode: Number
    };
  },
  created() {
    if (localStorage.login !== "true") {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    addItem() {
      if (this.newItem.length) {
        this.items.push(this.newItem);
        this.newItem = "";
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    onEditMode(index) {
      this.editMode = index;
    },
    addEditItem(index, event) {
      if (event.target.value === "") {
        return this.removeItem(index);
      }
      this.items[index] = event.target.value;
      this.editMode = null;
    }
  }
};
</script>

<style scoped>
button,
input,
ul {
  box-sizing: border-box;
  padding: 0;
  font: inherit;
  margin: 0;
}
ul {
  width: 100%;
  list-style: none;
}
li {
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
li:not(:last-child) {
  border-bottom: 1px solid rgb(118, 118, 118);
}

.container {
  width: 100%;
}
.userName {
  position: fixed;
  top: 20px;
  right: 20px;
}
.inputContainer {
  font-size: 20px;
  max-width: 600px;
  min-width: 300px;
  height: 50px;
  margin: 0 auto;
}
.mainInput {
  padding: 0 10px;
  height: 100%;
  width: 80%;
  font-size: 20px;
}
.add {
  width: 20%;
  height: 100%;
}
.listItems {
  font-size: 15px;
  max-width: 600px;
  min-width: 300px;
  margin: 15px auto;
}
.textItem,
.editInput {
  flex: 0 1 70%;
  margin-right: 10px;
  align-self: center;
  text-align: start;
}
.removeItem {
  flex: 0 0 25px;
  height: 25px;
  align-self: center;
}
</style>
