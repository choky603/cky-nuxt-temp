<template>
  <v-container>
    <v-simple-table>
      <template #default>
        <thead>
          <tr>
            <th :class="addTHClass">Name</th>
            <th :class="addTHClass">Calories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in datas" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

interface Data {
  name: string
  calories: number
}

@Component
export default class SamplePopup extends Vue {
  @Prop({ default: 'text-left' }) thClass!: string

  get addTHClass() {
    const list: string[] = []

    if (this.thClass) {
      list.push(this.thClass)
    }

    return list
  }

  private datas: Data[] = [
    {
      name: 'Frozen Yogurt',
      calories: 159
    },
    {
      name: 'Ice cream sandwich',
      calories: 237
    },
    {
      name: 'Eclair',
      calories: 262
    },
    {
      name: 'Cupcake',
      calories: 305
    },
    {
      name: 'Gingerbread',
      calories: 356
    },
    {
      name: 'Jelly bean',
      calories: 375
    },
    {
      name: 'Lollipop',
      calories: 392
    },
    {
      name: 'Honeycomb',
      calories: 408
    },
    {
      name: 'Donut',
      calories: 452
    },
    {
      name: 'KitKat',
      calories: 518
    }
  ]
}
</script>

<style></style>
