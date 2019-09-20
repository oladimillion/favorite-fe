<template>
 <AppPadding>
    <div class="action__bar full__width flex space__between">
      <form @submit.prevent="submit" class="search__input">
        <div class="position__rel full__width hide">
          <span class="position__abs">
            <Icon name="search" />
          </span>
          <input v-model="search" type="text" placeholder="Search..." class="full__width outline__none" />
        </div>
      </form>
      <button
        @click="setFormState({open: true, data: {}})" 
        class="add__btn flex space__between outline__none cursor__pointer">
        <Icon name="plus square outline" />
        <span>ADD</span>
      </button>
    </div>
  </AppPadding>
</template>

<script>
import { mapActions } from 'vuex'
import AppPadding from '@/components/common/AppPadding'
import Icon from "@/components/common/Icon"
export default {
  name: 'ActionBar',
  data() {
    return {
      search: '',
    }
  },
  components: {
    Icon,
    AppPadding,
  },
  methods: {
    submit() {},
    ...mapActions('form', {
      setFormState: 'setState'
    }),
  },
}
</script>

<style scoped>

div.action__bar {
  padding: 2% 0;
}

form.search__input {
  width: 250px;
  --input-color: rgb(20, 64, 99);
}

form.search__input div span {
  color: rgb(20, 64, 99, 0.3);
  top: 50%;
  transform: translateY(-50%);
  left: 6px;
}

form.search__input input {
  border: none;
  padding: 10px 10px;
  padding-left: 30px;
  border-radius: 4px;
  font-size: 1rem;
  color: var(--input-color);
  letter-spacing: 0.8px;
  background: rgba(197, 220, 243, 0.56);
}

form.search__input input::-webkit-input-placeholder {
  color: var(--input-color);
}

button.add__btn {
  width: 78px;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  background: var(--app-dark-color);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 0px 8px -3px #0f63e0;
  box-shadow: 0px 0px 8px -3px #0f63e0;
}
</style>
