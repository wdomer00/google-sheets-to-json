export interface Item {
    sourceSheet: SourceSheet;
    name: string;
    patternTitle?: null | string;
    diy?: boolean;
    patternCustomize?: boolean;
    kitType?: KitType | null;
    size?: Size;
    surface?: boolean;
    exchangePrice?: number | null;
    exchangeCurrency?: ExchangeCurrency | null;
    sourceNotes?: null | string;
    seasonEvent?: null | string;
    seasonEventExclusive?: boolean | null | string;
    hhaBasePoints?: number | null;
    hhaCategory?: HhaCategory | null;
    interact?: boolean | InteractEnum;
    tag?: null | string;
    outdoor?: boolean;
    speakerType?: SpeakerType | null;
    lightingType?: LightingType | null;
    catalog?: Catalog;
    versionAdded?: VersionAdded;
    unlocked?: boolean;
    set?: null | string;
    series?: null | string;
    customizationKitCost?: number | null;
    variants?: Variant[];
    doorDeco?: boolean;
    vfx?: boolean;
    vfxType?: VfxType | null;
    windowType?: WindowType | null;
    windowColor?: WindowColor | null;
    paneType?: PaneType | null;
    curtainType?: CurtainType | null;
    curtainColor?: null | string;
    ceilingType?: CeilingType;
    sizeCategory?: Shadow;
    stackSize?: number;
    customize?: boolean;
    uses?: number;
    seasonalAvailability?: SeasonalAvailability;
    seasonality?: SeasonalAvailability;
    mannequinSeason?: SeasonalAvailability | null;
    gender?: Gender;
    villagerGender?: Gender | null;
    style1?: Style;
    style2?: Style;
    sortOrder?: number;
    villagerEquippable?: boolean;
    clothGroupId?: number;
    primaryShape?: PrimaryShape;
    secondaryShape?: SecondaryShape | null;
    type?: string;
    fossilGroup?: string;
    description?: string;
    museum?: Museum;
    inventoryFilename?: string;
    storageFilename?: null | string;
    category?: Category;
    realArtworkTitle?: string;
    artist?: string;
    num?: number;
    iconImage?: string;
    critterpediaImage?: string;
    furnitureImage?: string;
    sell?: number | null;
    whereHow?: string;
    shadow?: Shadow;
    catchDifficulty?: CatchDifficulty;
    vision?: Vision;
    totalCatchesToUnlock?: number;
    spawnRates?: string;
    catchPhrase?: string;
    iconFilename?: string;
    critterpediaFilename?: string;
    furnitureFilename?: string;
    internalId?: number;
    uniqueEntryId?: string;
    colors?: Color[];
    specialSell?: number;
    activeMonths?: ActiveMonths;
    weather?: Weather;
    movementSpeed?: MovementSpeed;
    image?: string;
    buy?: number;
    source?: string[];
    recipesToUnlock?: number;
    craftedItemInternalId?: number;
    cardColor?: CardColor | null;
    diyIconFilename?: string;
    serialId?: number;
    materials?: {
        [key: string]: number;
    };
    photoImage?: string;
    houseImage?: string;
    species?: string;
    personality?: Personality;
    subtype?: Subtype;
    hobby?: Hobby;
    birthday?: string;
    catchphrase?: string;
    favoriteSong?: string;
    favoriteSaying?: string;
    defaultClothing?: number;
    defaultUmbrella?: string;
    wallpaper?: string;
    flooring?: string;
    furnitureList?: string;
    furnitureNameList?: string;
    nameColor?: string;
    bubbleColor?: string;
    filename?: string;
    styles?: Style[];
}
export interface ActiveMonths {
    northern: Thern[];
    southern: Thern[];
}
export interface Thern {
    month: number;
    isAllDay: boolean;
    activeHours: Array<string[]>;
    season: Season;
}
export declare enum Season {
    Autumn = "autumn",
    Spring = "spring",
    Summer = "summer",
    Winter = "winter"
}
export declare enum CardColor {
    Beige = "beige",
    Blue = "blue",
    Brick = "brick",
    Brown = "brown",
    Cream = "cream",
    DarkGray = "dark gray",
    Gold = "gold",
    Green = "green",
    LightGray = "light gray",
    Orange = "orange",
    Pink = "pink",
    Purple = "purple",
    Red = "red",
    Silver = "silver",
    White = "white",
    Yellow = "yellow"
}
export declare enum Catalog {
    ForSale = "For sale",
    NotForSale = "Not for sale",
    NotInCatalog = "Not in catalog"
}
export declare enum CatchDifficulty {
    Easy = "Easy",
    Hard = "Hard",
    Medium = "Medium",
    VeryEasy = "Very Easy",
    VeryHard = "Very Hard"
}
export declare enum Category {
    Bridge = "Bridge",
    Door = "Door",
    Equipment = "Equipment",
    Floors = "Floors",
    Housewares = "Housewares",
    Incline = "Incline",
    Mailbox = "Mailbox",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Roofing = "Roofing",
    Rugs = "Rugs",
    Siding = "Siding",
    Tools = "Tools",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper"
}
export declare enum CeilingType {
    Cloth = "Cloth",
    Gold = "Gold",
    Plain = "Plain",
    Stone = "Stone",
    Tile = "Tile",
    Wood = "Wood"
}
export declare enum Color {
    Aqua = "Aqua",
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow"
}
export declare enum CurtainType {
    Curtains = "Curtains",
    RollerShades = "Roller Shades",
    SlattedBlinds = "Slatted Blinds"
}
export declare enum ExchangeCurrency {
    HeartCrystals = "Heart Crystals",
    NookMiles = "Nook Miles"
}
export declare enum Gender {
    Female = "Female",
    Free = "Free",
    Male = "Male",
    Manly = "Manly",
    Womanly = "Womanly"
}
export declare enum HhaCategory {
    AC = "AC",
    Appliance = "Appliance",
    Audio = "Audio",
    Clock = "Clock",
    Doll = "Doll",
    Dresser = "Dresser",
    Lighting = "Lighting",
    MusicalInstrument = "MusicalInstrument",
    Pet = "Pet",
    Plant = "Plant",
    SmallGoods = "SmallGoods",
    Trash = "Trash",
    Tv = "TV"
}
export declare enum Hobby {
    Education = "Education",
    Fashion = "Fashion",
    Fitness = "Fitness",
    Music = "Music",
    Nature = "Nature",
    Play = "Play"
}
export declare enum InteractEnum {
    Chair = "Chair",
    Trash = "Trash",
    Wardrobe = "Wardrobe",
    Workbench = "Workbench"
}
export declare enum KitType {
    Normal = "Normal",
    Pumpkin = "Pumpkin"
}
export declare enum LightingType {
    Candle = "Candle",
    Emission = "Emission",
    Fluorescent = "Fluorescent",
    Monitor = "Monitor",
    Spotlight = "Spotlight"
}
export declare enum SeasonalAvailability {
    AllYear = "All Year",
    Autumn = "Autumn",
    Fall = "Fall",
    Spring = "Spring",
    Summer = "Summer",
    Winter = "Winter"
}
export declare enum MovementSpeed {
    Fast = "Fast",
    Medium = "Medium",
    Slow = "Slow",
    Stationary = "Stationary",
    VeryFast = "Very fast",
    VerySlow = "Very slow"
}
export declare enum Museum {
    Room1 = "Room 1",
    Room2 = "Room 2",
    Room3 = "Room 3"
}
export declare enum PaneType {
    Glass = "Glass",
    Screen = "Screen"
}
export declare enum Personality {
    BigSister = "Big Sister",
    Cranky = "Cranky",
    Jock = "Jock",
    Lazy = "Lazy",
    Normal = "Normal",
    Peppy = "Peppy",
    Smug = "Smug",
    Snooty = "Snooty"
}
export declare enum PrimaryShape {
    ALine = "A-line",
    ALong = "A-long",
    BLong = "B-long",
    Balloon = "Balloon",
    Box = "Box",
    Dress = "Dress",
    Kimono = "Kimono",
    Marinesuit = "Marinesuit",
    Overall = "Overall",
    Rib = "Rib",
    Robe = "Robe",
    Salopette = "Salopette"
}
export declare enum SecondaryShape {
    H = "H",
    L = "L",
    N = "N"
}
export declare enum Shadow {
    Large = "Large",
    Long = "Long",
    Medium = "Medium",
    Small = "Small",
    XLarge = "X-Large",
    XLargeWFin = "X-Large w/Fin",
    XSmall = "X-Small",
    XXLarge = "XX-Large"
}
export declare enum Size {
    The05X1 = "0.5x1",
    The15X15 = "1.5x1.5",
    The1X05 = "1x0.5",
    The1X1 = "1x1",
    The1X15 = "1x1.5",
    The1X2 = "1x2",
    The2X05 = "2x0.5",
    The2X1 = "2x1",
    The2X15 = "2x1.5",
    The2X2 = "2x2",
    The3X1 = "3x1",
    The3X2 = "3x2",
    The3X3 = "3x3",
    The4X3 = "4x3",
    The4X4 = "4x4",
    The5X5 = "5x5"
}
export declare enum SourceSheet {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    ClothingOther = "Clothing Other",
    Construction = "Construction",
    DressUp = "Dress-Up",
    Fencing = "Fencing",
    Fish = "Fish",
    Floors = "Floors",
    Fossils = "Fossils",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Insects = "Insects",
    Miscellaneous = "Miscellaneous",
    Music = "Music",
    Other = "Other",
    Photos = "Photos",
    Posters = "Posters",
    Recipes = "Recipes",
    Rugs = "Rugs",
    SeaCreatures = "Sea Creatures",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    Villagers = "Villagers",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper"
}
export declare enum SpeakerType {
    Cheap = "Cheap",
    HiFi = "Hi-fi",
    Phono = "Phono",
    Retro = "Retro"
}
export declare enum Style {
    Active = "Active",
    Cool = "Cool",
    Cute = "Cute",
    Elegant = "Elegant",
    Gorgeous = "Gorgeous",
    Simple = "Simple"
}
export declare enum Subtype {
    A = "A",
    B = "B"
}
export interface Variant {
    image?: string;
    variation?: number | null | string;
    filename: string;
    variantId?: VariantID | null;
    uniqueEntryId: string;
    colors: Color[];
    pattern?: null | string;
    bodyCustomize?: boolean;
    bodyTitle?: BodyTitle | null;
    source: Source[];
    internalId: number;
    buy: number;
    sell: number | null;
    themes: Theme[];
    closetImage?: string;
    storageImage?: null | string;
    labelThemes?: LabelTheme[];
    framedImage?: null | string;
    albumImage?: null | string;
    inventoryImage?: string;
    genuine?: boolean;
    highResTexture?: null;
}
export declare enum BodyTitle {
    Art = "Art",
    BagColor = "Bag color",
    Bamboo = "Bamboo",
    BarrelColor = "Barrel color",
    BlockColor = "Block color",
    Body = "Body",
    BodyColor = "Body color",
    BrickColor = "Brick color",
    Can = "Can",
    Cardboard = "Cardboard",
    ChairBackAndSeat = "Chair back and seat",
    Coating = "Coating",
    Color = "Color",
    CoverDesign = "Cover design",
    CoverPattern = "Cover pattern",
    Creation = "Creation",
    Decorations = "Decorations",
    Design = "Design",
    Dish = "Dish",
    Easel = "Easel",
    Fabric = "Fabric",
    Finish = "Finish",
    Flavor = "Flavor",
    FlowerColor = "Flower color",
    Food = "Food",
    Frame = "Frame",
    FruitType = "Fruit type",
    Genre = "Genre",
    HayCondition = "Hay condition",
    Illumination = "Illumination",
    KnitCapColor = "Knit-cap color",
    LightColor = "Light color",
    LumberType = "Lumber type",
    MapCenter = "Map center",
    MushroomType = "Mushroom type",
    Name = "Name",
    Navigation = "Navigation",
    NutColor = "Nut color",
    Paint = "Paint",
    PaintColor = "Paint color",
    PlateColor = "Plate color",
    PumpkinColor = "Pumpkin color",
    RaceCarColors = "Race-car colors",
    RoofColor = "Roof color",
    Season = "Season",
    ShellColor = "Shell color",
    Sign = "Sign",
    Stone = "Stone",
    Tabletop = "Tabletop",
    TireColor = "Tire color",
    Variation = "Variation"
}
export declare enum LabelTheme {
    Comfy = "comfy",
    Everyday = "everyday",
    FairyTale = "fairy tale",
    Formal = "formal",
    Goth = "goth",
    Outdoorsy = "outdoorsy",
    Party = "party",
    Sporty = "sporty",
    Theatrical = "theatrical",
    Vacation = "vacation",
    Work = "work"
}
export declare enum Source {
    AbleSisters = "Able Sisters",
    AllVillagers = "All villagers",
    AppleTree = "Apple Tree",
    AssessingFossils = "Assessing fossils",
    Beach = "Beach",
    Birthday = "Birthday",
    Blathers = "Blathers",
    Breeding = "Breeding",
    BuryingBellsInAGlowingSpot = "Burying bells in a glowing spot",
    CJ = "C.J.",
    CatchingWithANet = "Catching with a net",
    CedarTree = "Cedar Tree",
    CheckToyDayStockingsTheDayAfterToyDay = "Check Toy Day stockings the day after Toy Day",
    CherryTree = "Cherry Tree",
    ChoppingABambooTree = "Chopping a bamboo tree",
    ChoppingATree = "Chopping a tree",
    ClamDigSpot = "Clam dig spot",
    CoconutTree = "Coconut Tree",
    Crafting = "Crafting",
    Cyrus = "Cyrus",
    DaisyMae = "Daisy Mae",
    DeliveringItemForAVillager = "Delivering item for a villager",
    DigSpot = "Dig Spot",
    DiggingUpAFullyGrownBush = "Digging up a fully grown bush",
    DiggingUpAPumpkinPlant = "Digging up a pumpkin plant",
    DiveSpot = "Dive spot",
    DodoAirlines = "Dodo Airlines",
    DonTReturnLostItem = "Don't return lost item",
    DonTReturnTreasureQuestItem = "Don't return treasure quest item",
    EggBalloon = "Egg balloon",
    Empty = "",
    ExpiredTurnips = "Expired turnips",
    Fishing = "Fishing",
    Flick = "Flick",
    Franklin = "Franklin",
    GlowingDigSpot = "Glowing dig spot",
    Gullivarrr = "Gullivarrr",
    Gulliver = "Gulliver",
    HardwoodTree = "Hardwood Tree",
    Hha = "HHA",
    HighFriendship = "High Friendship",
    HittingARock = "Hitting a rock",
    Isabelle = "Isabelle",
    Jack = "Jack",
    Jingle = "Jingle",
    JollyReddSTreasureTrawler = "Jolly Redd's Treasure Trawler",
    KKConcert = "K.K. concert",
    Kicks = "Kicks",
    Label = "Label",
    Leif = "Leif",
    Luna = "Luna",
    MOM = "Mom",
    Mail = "Mail",
    MayDayTour = "May Day Tour",
    Nintendo = "Nintendo",
    NookMilesRedemption = "Nook Miles Redemption",
    NookSCranny = "Nook's Cranny",
    NookShopping = "Nook Shopping",
    NookShoppingDailySelection = "Nook Shopping Daily Selection",
    NookShoppingPosters = "Nook Shopping Posters",
    NookShoppingPromotion = "Nook Shopping Promotion",
    NookShoppingSeasonal = "Nook Shopping Seasonal",
    OnGround = "On ground",
    OrangeTree = "Orange Tree",
    Pascal = "Pascal",
    PeachTree = "Peach Tree",
    PearTree = "Pear Tree",
    PickingFlowers = "Picking flowers",
    PickingPumpkins = "Picking pumpkins",
    PlantingABambooShoot = "Planting a bamboo shoot",
    PlantingACedarSapling = "Planting a cedar sapling",
    PlantingACherry = "Planting a cherry",
    PlantingACoconut = "Planting a coconut",
    PlantingAPeach = "Planting a peach",
    PlantingAPear = "Planting a pear",
    PlantingASapling = "Planting a sapling",
    PlantingAnApple = "Planting an apple",
    PlantingAnOrange = "Planting an orange",
    RecycleBox = "Recycle box",
    ReddSRaffle = "Redd's Raffle",
    Reese = "Reese",
    Rover = "Rover",
    Saharah = "Saharah",
    SeedBag = "Seed bag",
    ShakingAHardwoodOrCedarTree = "Shaking a hardwood or cedar tree",
    Snowboy = "Snowboy",
    StartingItems = "Starting items",
    The5StarTownStatus = "5-star town status",
    TomNook = "Tom Nook",
    UseAFountainFirework = "Use a fountain firework",
    Villagers = "Villagers",
    Wilbur = "Wilbur",
    WishingOnShootingStars = "Wishing on shooting stars",
    WrappingAPresent = "Wrapping a present",
    Zipper = "Zipper"
}
export declare enum Theme {
    Bathroom = "bathroom",
    ChildSRoom = "child's room",
    Concert = "concert",
    Den = "den",
    Expensive = "expensive",
    Facility = "facility",
    Fancy = "fancy",
    Fitness = "fitness",
    FolkArt = "folk art",
    FreezingCold = "freezing cold",
    Garage = "garage",
    Garden = "garden",
    Horror = "horror",
    Kitchen = "kitchen",
    LivingRoom = "living room",
    Music = "music",
    None = "none",
    Ocean = "ocean",
    Office = "office",
    Outdoors = "outdoors",
    Party = "party",
    School = "school",
    Shop = "shop",
    Space = "space",
    ZenStyle = "zen-style"
}
export declare enum VariantID {
    The0_0 = "0_0",
    The0_1 = "0_1",
    The0_2 = "0_2",
    The0_3 = "0_3",
    The0_4 = "0_4",
    The0_5 = "0_5",
    The0_6 = "0_6",
    The0_7 = "0_7",
    The1_0 = "1_0",
    The1_1 = "1_1",
    The1_2 = "1_2",
    The1_3 = "1_3",
    The1_4 = "1_4",
    The1_5 = "1_5",
    The1_6 = "1_6",
    The1_7 = "1_7",
    The2_0 = "2_0",
    The2_1 = "2_1",
    The2_2 = "2_2",
    The2_3 = "2_3",
    The2_4 = "2_4",
    The2_5 = "2_5",
    The2_6 = "2_6",
    The2_7 = "2_7",
    The3_0 = "3_0",
    The3_1 = "3_1",
    The3_2 = "3_2",
    The3_3 = "3_3",
    The3_4 = "3_4",
    The3_5 = "3_5",
    The3_6 = "3_6",
    The3_7 = "3_7",
    The4_0 = "4_0",
    The4_1 = "4_1",
    The4_2 = "4_2",
    The4_3 = "4_3",
    The4_4 = "4_4",
    The4_5 = "4_5",
    The4_6 = "4_6",
    The4_7 = "4_7",
    The5_0 = "5_0",
    The5_1 = "5_1",
    The5_2 = "5_2",
    The5_3 = "5_3",
    The5_4 = "5_4",
    The5_5 = "5_5",
    The5_6 = "5_6",
    The5_7 = "5_7",
    The6_0 = "6_0",
    The6_1 = "6_1",
    The6_2 = "6_2",
    The6_3 = "6_3",
    The6_4 = "6_4",
    The6_5 = "6_5",
    The6_6 = "6_6",
    The6_7 = "6_7",
    The7_0 = "7_0",
    The7_1 = "7_1",
    The7_2 = "7_2",
    The7_3 = "7_3",
    The7_4 = "7_4",
    The7_5 = "7_5",
    The7_6 = "7_6",
    The7_7 = "7_7"
}
export declare enum VersionAdded {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
    The160 = "1.6.0"
}
export declare enum VfxType {
    LightOff = "LightOff",
    Random = "Random",
    Synchro = "Synchro"
}
export declare enum Vision {
    Medium = "Medium",
    Narrow = "Narrow",
    VeryNarrow = "Very Narrow",
    VeryWide = "Very Wide",
    Wide = "Wide"
}
export declare enum Weather {
    AnyExceptRain = "Any except rain",
    AnyWeather = "Any weather",
    RainOnly = "Rain only"
}
export declare enum WindowColor {
    BlackMetal = "Black Metal",
    DarkWood = "Dark Wood",
    GreyMetal = "Grey Metal",
    GreyWood = "Grey Wood",
    LightWood = "Light Wood",
    NaturalWood = "Natural Wood",
    WhiteMetal = "White Metal",
    WhiteWood = "White Wood",
    Wood = "Wood"
}
export declare enum WindowType {
    Arch = "Arch",
    Circle = "Circle",
    FourPane = "Four Pane",
    SinglePane = "Single Pane",
    SlidingPane = "Sliding Pane"
}
