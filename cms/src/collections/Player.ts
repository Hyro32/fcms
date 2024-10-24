import { CollectionConfig } from 'payload/types'

const Player: CollectionConfig = {
  slug: 'players',
  labels: {
    singular: {
      en: 'Player',
      es: 'Jugador'
    },
    plural: {
      en: 'Players',
      es: 'Jugadores'
    }
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Name',
        es: 'Nombre'
      }
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Image',
        es: 'Imagen'
      }
    },
    {
      name: 'number',
      type: 'number',
      required: true,
      label: {
        en: 'Number',
        es: 'Número'
      }
    },
    {
      name: 'position',
      type: 'select',
      required: true,
      label: {
        en: 'Position',
        es: 'Posición'
      },
      options: [
        {
          label: {
            en: 'Goalkeeper',
            es: 'Portero'
          },
          value: 'goalkeeper'
        },
        {
          label: {
            en: 'Defender',
            es: 'Defensa'
          },
          value: 'defender'
        },
        {
          label: {
            en: 'Midfielder',
            es: 'Centrocampista'
          },
          value: 'midfielder'
        },
        {
          label: {
            en: 'Forward',
            es: 'Delantero'
          },
          value: 'forward'
        }
      ]
    },
    {
      name: 'goals',
      type: 'number',
      defaultValue: 0,
      label: {
        en: 'Goals',
        es: 'Goles'
      }
    },
    {
      name: 'assists',
      type: 'number',
      defaultValue: 0,
      label: {
        en: 'Assists',
        es: 'Asistencias'
      }
    },
    {
      name: 'red_cards',
      type: 'number',
      defaultValue: 0,
      label: {
        en: 'Red Cards',
        es: 'Tarjetas Rojas'
      }
    },
    {
      name: 'yellow_cards',
      type: 'number',
      defaultValue: 0,
      label: {
        en: 'Yellow Cards',
        es: 'Tarjetas Amarillas'
      }
    },
    {
      name: 'minutes_played',
      type: 'number',
      defaultValue: 0,
      label: {
        en: 'Minutes Played',
        es: 'Minutos Jugados'
      }
    }
  ]
}

export default Player
