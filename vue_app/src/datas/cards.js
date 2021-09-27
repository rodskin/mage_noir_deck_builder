const cards = {
    "seed": {
        "name": "Seed",
        "slug": "seed",
        "mana": {
            'fire': 0,
            'water': 0,
            'air': 0,
            'vegetal': 0,
            'mineral': 0,
            'arcane': 0
        },
        "components": {}
    },
    "sprouted_seed": {
        "name": "Sprouted seed",
        "slug": "sprouted_seed"
    },
    "animated_tree": {
        "name": "Animated tree",
        "slug": "animated_tree",
        "mana": {
            'fire': 0,
            'water': 1,
            'air': 0,
            'vegetal': 3,
            'mineral': 0,
            'arcane': 0
        },
        "components": {
            'seed': {
                'name': 'Seed',
                'qty': 1
            }
        }
    },
    "dead_tree": {
        "name": "Dead tree",
        "slug": "dead_tree"
    },
    "king_of_trees": {
        "name": "King of trees",
        "slug": "king_of_trees"
    },
    "enchanted_forest": {
        "name": "Enchanted forest",
        "slug": "enchanted_forest"
    },
    "hostile_forest": {
        "name": "Hostile forest",
        "slug": "hostile_forest"
    },
    "prodigious_sowing": {
        "name": "Prodigious sowing",
        "slug": "prodigious_sowing"
    },
    "the_vegetal_healer": {
        "name": "The vegetal healer",
        "slug": "the_vegetal_healer"
    },
    "bark_armor": {
        "name": "Bark armor",
        "slug": "bark_armor"
    },
    "druid_armor": {
        "name": "Druid armor",
        "slug": "druid_armor"
    },
    "kerloch_s_robe": {
        "name": "Kerloch's robe",
        "slug": "kerloch_s_robe"
    },
    "druid_horns": {
        "name": "Druid horns",
        "slug": "druid_horns"
    },
    "ritual_of_decomposition": {
        "name": "Ritual of decomposition",
        "slug": "ritual_of_decomposition"
    },
    "flame": {
        "name": "Flame",
        "slug": "flame"
    },
    "draconic_flame": {
        "name": "Draconic flame",
        "slug": "draconic_flame"
    },
    "mental_flame": {
        "name": "Mental flame",
        "slug": "mental_flame"
    },
    "rain_of_flames": {
        "name": "Rain of flames",
        "slug": "rain_of_flames"
    },
    "flame_projectile": {
        "name": "Flame projectile",
        "slug": "flame_projectile"
    },
    "fiery_arrow": {
        "name": "Fiery arrow",
        "slug": "fiery_arrow"
    },
    "magma_eruption": {
        "name": "Magma eruption",
        "slug": "magma_eruption"
    },
    "incinerate": {
        "name": "Incinerate",
        "slug": "incinerate"
    },
    "fire_whip": {
        "name": "Fire whip",
        "slug": "fire_whip"
    },
    "crimson_ring": {
        "name": "Crimson ring",
        "slug": "crimson_ring"
    },
    "fire_mask": {
        "name": "Fire mask",
        "slug": "fire_mask"
    },
    "burning_robe": {
        "name": "Burning robe",
        "slug": "burning_robe"
    },
    "crimson_ritual": {
        "name": "Crimson ritual",
        "slug": "crimson_ritual"
    },
    "blow": {
        "name": "Blow",
        "slug": "blow"
    },
    "healer_s_blow": {
        "name": "Healer's blow",
        "slug": "healer_s_blow"
    },
    "unexpected_wind": {
        "name": "Unexpected wind",
        "slug": "unexpected_wind"
    },
    "favorable_winds": {
        "name": "Favorable winds",
        "slug": "favorable_winds"
    },
    "violent_wind": {
        "name": "Violent wind",
        "slug": "violent_wind"
    },
    "zephyr": {
        "name": "Zephyr",
        "slug": "zephyr"
    },
    "air_blade": {
        "name": "Air blade",
        "slug": "air_blade"
    },
    "tornado": {
        "name": "Tornado",
        "slug": "tornado"
    },
    "acceleration": {
        "name": "Acceleration",
        "slug": "acceleration"
    },
    "air_current_wand": {
        "name": "Air current wand",
        "slug": "air_current_wand"
    },
    "air_mage_robe": {
        "name": "Air mage robe",
        "slug": "air_mage_robe"
    },
    "emptiness_ritual": {
        "name": "Emptiness ritual",
        "slug": "emptiness_ritual"
    },
    "droplet": {
        "name": "Droplet",
        "slug": "droplet"
    },
    "water_drop": {
        "name": "Water drop",
        "slug": "water_drop"
    },
    "surging_wave": {
        "name": "Surging wave",
        "slug": "surging_wave"
    },
    "purifying_wave": {
        "name": "Purifying wave",
        "slug": "purifying_wave"
    },
    "unleashed_ocean": {
        "name": "Unleashed ocean",
        "slug": "unleashed_ocean"
    },
    "soothing_rain": {
        "name": "Soothing rain",
        "slug": "soothing_rain"
    },
    "torrential_rain": {
        "name": "Torrential rain",
        "slug": "torrential_rain"
    },
    "endless_rain": {
        "name": "Endless rain",
        "slug": "endless_rain"
    },
    "storm": {
        "name": "Storm",
        "slug": "storm"
    },
    "condensation": {
        "name": "Condensation",
        "slug": "condensation"
    },
    "water_prison": {
        "name": "Water prison",
        "slug": "water_prison"
    },
    "tide": {
        "name": "Tide",
        "slug": "tide"
    },
    "the_water_healer": {
        "name": "The Water healer",
        "slug": "the_water_healer"
    },
    "melange_ritual": {
        "name": "Melange ritual",
        "slug": "melange_ritual"
    },
    "solid_rock": {
        "name": "Solid rock",
        "slug": "solid_rock"
    },
    "iron_rock": {
        "name": "Iron rock",
        "slug": "iron_rock"
    },
    "obsidian_rock": {
        "name": "Obsidian rock",
        "slug": "obsidian_rock"
    },
    "rock_wall": {
        "name": "Rock wall",
        "slug": "rock_wall"
    },
    "piercing_monolith": {
        "name": "Piercing monolith",
        "slug": "piercing_monolith"
    },
    "meteor_punch": {
        "name": "Meteor punch",
        "slug": "meteor_punch"
    },
    "ina_s_meteor": {
        "name": "Ina's meteor",
        "slug": "ina_s_meteor"
    },
    "active_magma": {
        "name": "Active magma",
        "slug": "active_magma"
    },
    "earthquake": {
        "name": "Earthquake",
        "slug": "earthquake"
    },
    "solid_armor": {
        "name": "Solid armor",
        "slug": "solid_armor"
    },
    "materialized_armor": {
        "name": "Materialized armor",
        "slug": "materialized_armor"
    },
    "materialized_blade": {
        "name": "Materialized blade",
        "slug": "materialized_blade"
    },
    "materialized_sword": {
        "name": "Materialized sword",
        "slug": "materialized_sword"
    },
    "lithomancer_ring": {
        "name": "Lithomancer ring",
        "slug": "lithomancer_ring"
    },
    "knight-mage_ritual": {
        "name": "Knight-mage ritual",
        "slug": "knight-mage_ritual"
    },
    "time_acceleration": {
        "name": "Time acceleration",
        "slug": "time_acceleration"
    },
    "split_second": {
        "name": "Split second",
        "slug": "split_second"
    },
    "millenia": {
        "name": "Millenia",
        "slug": "millenia"
    },
    "temporal_paradox": {
        "name": "Temporal paradox",
        "slug": "temporal_paradox"
    },
    "callback_to_present": {
        "name": "Callback to present",
        "slug": "callback_to_present"
    },
    "mana_dispersal": {
        "name": "Mana dispersal",
        "slug": "mana_dispersal"
    },
    "fast_forward": {
        "name": "Fast forward",
        "slug": "fast_forward"
    },
    "return_back": {
        "name": "Return back",
        "slug": "return_back"
    },
    "temporal_blast": {
        "name": "Temporal blast",
        "slug": "temporal_blast"
    },
    "knowlege_of_history": {
        "name": "Knowlege of history",
        "slug": "knowlege_of_history"
    },
    "galactic_mantle": {
        "name": "Galactic mantle",
        "slug": "galactic_mantle"
    },
    "knowledge_ritual": {
        "name": "Knowledge ritual",
        "slug": "knowledge_ritual"
    }
}

export default cards
