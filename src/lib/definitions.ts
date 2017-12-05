/* tslint:disable */
/* GENERATED FILE -- DO NOT EDIT */
/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { request as xhrRequest, RequestResult } from 'camelot-unchained/lib/utils/request';

export interface RequestConfig {
  url: string;
  headers?: {[key:string]:string};
}

export interface Vec2f {
  x: number;
  y: number;
}

export interface ProgressionResult {
  Result: ProgressionResultCode;
  IsSuccess: boolean;
  Details: string;
}

export interface QueueStatusResponse {
  errorMessage: string;
  queueStatusMessage: QueueStatusMessage;
}

export interface QueueStatusMessage {
  status: string;
  numContributors: number;
  maxContributors: number;
  blueprints: QueuedBlueprintMessage[];
}

export interface QueuedBlueprintMessage {
  name: string;
  percentComplete: number;
  estTimeRemaining: number;
  subName: string;
  amtNeeded: number;
}

export interface ModifySecureTradeResult {
  Result: ModifySecureTradeResultCode;
  IsSuccess: boolean;
  Details: string;
  SecureTradeID: string;
}

export interface MoveItemRequest {
  MoveItemID: string;
  StackHash: string;
  UnitCount: number;
  To: MoveItemRequestLocation;
  From: MoveItemRequestLocation;
}

export interface MoveItemRequestLocation {
  CharacterID: string;
  EntityID: string;
  Position: number;
  ContainerID: string;
  GearSlotIDs: string[];
  VoxSlot: SubItemSlot;
  Location: MoveItemRequestLocationType;
}

export interface MoveItemResult {
  Code: MoveItemResultCode;
  MovedItemIDs: string[];
  Message: string;
}

export interface ModifyVoxJobResult {
  Result: ModifyVoxJobResultCode;
  IsSuccess: boolean;
  Details: string;
  MovedItemID: string;
  DiscoveredRecipeIDs: string[];
}

export interface ProgressionError {
  ProgressionResult: ProgressionResult;
  Message: string;
  ResultCode: ProgressionResultCode;
  Code: FieldCodes;
}

export interface SecureTradeError {
  SecureTradeResult: ModifySecureTradeResult;
  Message: string;
  ResultCode: ModifySecureTradeResultCode;
  Code: FieldCodes;
}

export interface ModifyVoxJobError {
  VoxJobResult: ModifyVoxJobResult;
  Message: string;
  VoxJobCode: ModifyVoxJobResultCode;
  Code: FieldCodes;
}

export interface MoveItemError {
  MoveItemResult: MoveItemResult;
  Message: string;
  MoveItemCode: MoveItemResultCode;
  Code: FieldCodes;
}

export interface GroupActionError {
  Actions: IActionError[];
  Code: FieldCodes;
  Message: string;
}

export interface IGroupInvite {
  Code: string;
  Shard: number;
  Status: InviteStatus;
  TargetsID128: string;
  ForGroup: string;
  Created: string;
  MaxUses: number;
  Uses: number;
  DurationTicks: number;
}

export interface IActionError {
  Code: ActionErrorCode;
  Message: string;
}

export interface MessageOfTheDay {
  Title: string;
  HTMLContent: string;
  Duration: number;
  Channels: number[];
  ChannelsAsLongs: number[];
  ID: string;
  UtcDisplayStart: string;
  UtcDisplayEnd: string;
  UtcCreated: string;
}

export interface PatchNote {
  Channels: number[];
  ChannelsAsLongs: number[];
  HTMLContent: string;
  Title: string;
  PatchNumber: string;
  ID: string;
  UtcDisplayStart: string;
  UtcDisplayEnd: string;
  UtcCreated: string;
}

export interface BaseContentModel {
  ID: string;
  UtcDisplayStart: string;
  UtcDisplayEnd: string;
  UtcCreated: string;
}

export interface PatcherAlert {
  Message: string;
  ID: string;
  UtcDisplayStart: string;
  UtcDisplayEnd: string;
  UtcCreated: string;
}

export interface PatcherHero {
  HTMLContent: string;
  Priority: number;
  ID: string;
  UtcDisplayStart: string;
  UtcDisplayEnd: string;
  UtcCreated: string;
}

export interface SecureTradeItem {
  ItemID: string;
  UnitCount: number;
}

export interface ArchetypeInfo {
  description: string;
  faction: Faction;
  id: Archetype;
  name: string;
}

export interface Channel {
  ID: number;
  Name: string;
  Description: string;
  Permissions: PatchPermissions;
}

export interface SimpleCharacter {
  archetype: Archetype;
  faction: Faction;
  gender: Gender;
  id: string;
  lastLogin: string;
  name: string;
  race: Race;
  shardID: number;
}

export interface Character {
  archetype: Archetype;
  attributes: { [key: string]: number; };
  traitIDs: string[];
  faction: Faction;
  gender: Gender;
  id: string;
  lastLogin: string;
  name: string;
  race: Race;
  shardID: number;
}

export interface ControlGameState {
  arthurianScore: number;
  controlPoints: ControlPoint[];
  gameState: number;
  timeLeft: number;
  tuathaDeDanannScore: number;
  vikingScore: number;
}

export interface ControlPoint {
  faction: string;
  id: string;
  size: string;
  x: number;
  y: number;
}

export interface FactionInfo {
  description: string;
  id: number;
  name: string;
  shortName: string;
}

export interface PatcherAlert {
  id: string;
  message: string;
  utcDateEnd: string;
  utcDateStart: string;
}

export interface PatcherHeroContent {
  content: string;
  id: string;
  priority: number;
  utcDateEnd: string;
  utcDateStart: string;
}

export interface PlayerAttributeOffset {
  race: Race;
  gender: Gender;
  attributeOffsets: { [key: string]: number; };
}

export interface PlayerPresence {
  characterID: string;
  connectedZoneInstanceIDs: number[];
  activeZoneInstanceID: number;
  desiredZoneInstanceID: number;
}

export interface PlayerStatAttribute {
  baseValue: number;
  derivedFrom: string;
  description: string;
  maxOrMultipler: number;
  name: string;
  type: PlayerStatType;
  units: string;
}

export interface RaceInfo {
  name: string;
  description: string;
  faction: Faction;
  id: Race;
}

export interface ServerModel {
  accessLevel: AccessType;
  channelID: number;
  channelPatchPermissions: number;
  host: string;
  name: string;
  playerMaximum: number;
  shardID: number;
  status: ServerStatus;
  apiHost: string;
}

export interface ServerPresence {
  address: string;
  zoneResourceID: number;
  zoneInstanceID: number;
  shardID: number;
  zoneBoundsMax: Vec2f;
  zoneBoundsMin: Vec2f;
  restrictToFaction: Faction;
  isStartingZone: boolean;
  isHidden: boolean;
  isMainInstance: boolean;
}

export interface ServerState {
  controlGameState: ControlGameState;
  playerCounts: PlayerCounts;
  spawnPoints: SpawnPoint[];
}

export interface SpawnPoint {
  faction: Faction;
  x: number;
  y: number;
}

export interface PlayerCounts {
  arthurian: number;
  maxPlayers: number;
  tuatha: number;
  viking: number;
}

export interface StartingServer {
  Address: string;
  ZoneInstanceID: number;
}

export interface ZoneInfo {
  ID: string;
  Name: string;
  Address: string;
  Bounds: string;
}

export interface Trait {
  id: string;
  name: string;
  description: string;
  icon: string;
  points: number;
  prerequisites: string[];
}

export interface OptionalAndRequiredTraits {
  required: string[];
  optional: string[];
}

export interface ExclusiveTraits {
  ids: string[];
  minRequired: number;
  maxAllowed: number;
}

export interface TraitList {
  traits: Trait[];
  factions: { [key: string]: OptionalAndRequiredTraits; };
  races: { [key: string]: OptionalAndRequiredTraits; };
  archetypes: { [key: string]: OptionalAndRequiredTraits; };
  ranks: string[][];
  exclusivity: ExclusiveTraits[];
}

export interface WarbandMember {
  additionalPermissions: string[];
  archetype: Archetype;
  avatar: string;
  blood: CurrentMaxValue;
  characterID: string;
  gender: Gender;
  health: CurrentMaxValue[];
  joined: string;
  name: string;
  panic: CurrentMaxValue;
  parted: string;
  race: Race;
  rank: string;
  stamina: CurrentMaxValue;
  temperature: Temperature;
  wounds: number[];
}

export interface ApiErrorResponse {
  Code: number;
  Message: string;
  FieldCodes: IFieldCode[];
}

export interface BadRequestFieldCode {
  Code: FieldCodes;
  Message: string;
}

export interface UnspecifiedRequestError {
  Code: FieldCodes;
  Message: string;
}

export interface InvalidModel {
  ModelErrors: ModelError[];
  Code: FieldCodes;
  Message: string;
}

export interface ModelError {
  Message: string;
  ParamName: string;
  TypeName: string;
}

export interface ExecutionErrorFieldCode {
  Code: FieldCodes;
  Message: string;
}

export interface UnspecifiedExecutionError {
  Code: FieldCodes;
  Message: string;
}

export interface UnhandledExecutionException {
  Exception: string;
  Code: FieldCodes;
  Message: string;
}

export interface DoesNotExist {
  Code: FieldCodes;
  Message: string;
}

export interface UserStateConflict {
  Code: FieldCodes;
  Message: string;
}

export interface InsufficientResource {
  Resources: ResourceRequirement[];
  Code: FieldCodes;
  Message: string;
}

export interface ResourceRequirement {
  Name: string;
  Required: Object;
  Available: Object;
}

export interface IFieldCode {
  Code: FieldCodes;
  Message: string;
}

export interface NotAllowedFieldCode {
  Code: FieldCodes;
  Message: string;
}

export interface UnspecifiedNotAllowed {
  Code: FieldCodes;
  Message: string;
}

export interface RateLimitExceeded {
  Retry: number;
  Code: FieldCodes;
  Message: string;
}

export interface InternalAction {
  Code: FieldCodes;
  Message: string;
}

export interface ServiceUnavailableFieldCode {
  Code: FieldCodes;
  Message: string;
}

export interface UnspecifiedServiceUnavailable {
  Code: FieldCodes;
  Message: string;
}

export interface DatabaseUnavailable {
  Code: FieldCodes;
  Message: string;
}

export interface GroupServiceUnavailable {
  Code: FieldCodes;
  Message: string;
}

export interface GameServiceUnavailable {
  Code: FieldCodes;
  Message: string;
}

export interface PresenceServiceUnavailable {
  Code: FieldCodes;
  Message: string;
}

export interface UnauthorizedFieldCode {
  Code: FieldCodes;
  Message: string;
}

export interface UnspecifiedAuthorizationDenied {
  Code: FieldCodes;
  Message: string;
}

export interface APIKeyAuthorizationFailed {
  Code: FieldCodes;
  Message: string;
}

export interface LoginTokenAuthorizationFailed {
  Code: FieldCodes;
  Message: string;
}

export interface RealmRestricted {
  Code: FieldCodes;
  Message: string;
}

export enum AccessType {
  Public = 0,
  Beta3 = 1,
  Beta2 = 2,
  Beta1 = 3,
  Alpha = 4,
  InternalTest = 5,
  Employees = 6,
}

export enum PlayerStatType {
  None = 0,
  Primary = 1,
  Secondary = 2,
  Derived = 3,
  Hidden = 4,
}

export enum SubItemSlot {
  Invalid = 0,
  PrimarySubstance = 1,
  SecondarySubstance1 = 2,
  SecondarySubstance2 = 3,
  SecondarySubstance3 = 4,
  Alloy = 5,
  WeaponBlade = 6,
  WeaponHandle = 7,
  NonRecipe = 8,
}

export enum Archetype {
  BlackKnight = 8,
  Fianna = 9,
  Mjolnir = 10,
  Physician = 11,
  Empath = 12,
  Stonehealer = 13,
  Blackguard = 14,
  ForestStalker = 15,
  WintersShadow = 16,
}

export enum Faction {
  Factionless = 0,
  TDD = 1,
  Viking = 2,
  Arthurian = 3,
  COUNT = 4,
}

export enum Gender {
  None = 0,
  Male = 1,
  Female = 2,
}

export enum Race {
  Luchorpan = 2,
  Valkyrie = 4,
  HumanMaleV = 15,
  HumanMaleA = 16,
  HumanMaleT = 17,
  Pict = 18,
}

export enum ProgressionResultCode {
  Success = 0,
  InProgress = 1,
  PlayerNotFound = 2,
  DailyLogNotFound = 3,
  DBError = 4,
  DailyLogNotPublished = 5,
  NotNextDayLog = 6,
  InItemLoadoutScenario = 7,
  InvalidRequest = -1,
}

export enum ModifySecureTradeResultCode {
  Success = 0,
  NoTrade = 1,
  IncorrectState = 2,
  ItemNotFound = 3,
  InventoryNotFound = 4,
  DuplicateItemInRequest = 5,
  NoPendingInvite = 6,
  MissingFaction = 7,
  FactionMismatch = 8,
  TradeSourceNotAlive = 9,
  TradeTargetNotAlive = 10,
  NoEntityPosition = 11,
  TooFarAway = 12,
  EntityMismatch = 13,
  CanceledEntityMissing = 14,
  DBError = 15,
  NotLoggedIn = 16,
  EntityToTradeWithNotFound = 17,
  CannotTradeWithSelf = 18,
  MoveItemError = 19,
  EntityCannotTrade = 20,
  InvalidRequest = -1,
}

export enum MoveItemRequestLocationType {
  Invalid = 0,
  Container = 1,
  Equipment = 2,
  Ground = 3,
  Inventory = 4,
  Vox = 5,
  Trash = 6,
}

export enum MoveItemResultCode {
  Success = 0,
  None = 1,
  Timeout = 2,
  PlayerNotFound = 3,
  EntityNotFound = 4,
  ItemNotFound = 5,
  ItemNotValid = 6,
  MixedError = 7,
  TooManyItems = 8,
  InventoryNotFound = 9,
  EquipmentNotFound = 10,
  DefinitionNotFound = 11,
  SecureTradeNotFound = 12,
  InvalidParameter = 13,
  SpatialNotFound = 14,
  ItemFeatureTurnedOff = 15,
  BrokenItem = 16,
  ItemRequirementNotMet = 17,
  ItemStatRequirementNotMet = 18,
  EntityNotValid = 19,
  MultiItemMoveNotSupported = 20,
  ItemsDoNotStack = 21,
  TooFarAway = 22,
  PermissionDenied = 23,
  ItemInversion = 24,
  InvalidVoxSlot = 25,
  ItemCannotBeTraded = 26,
  RestrictedToScenario = 27,
  CannotRemoveFromRunningScenario = 28,
}

export enum ModifyVoxJobResultCode {
  Success = 0,
  JobAlreadyExists = 1,
  InvalidJob = 2,
  NoCurrentJob = 3,
  ItemsInVox = 4,
  IncorrectJobState = 5,
  DBError = 6,
  NotSupported = 7,
  InvalidRecipe = 8,
  TooManyIngredients = 9,
  NotEnoughIngredients = 10,
  IncorrectIngredient = 11,
  InvalidIngredient = 12,
  InvalidQuality = 13,
  InventoryFull = 14,
  NoRepairPoints = 15,
  InvalidUnitCount = 16,
  ParameterError = 17,
  VoxNotFound = 18,
  RecipeAlreadyDiscovered = 19,
  RecipeNotSet = 20,
  ItemSlotNotSupported = 21,
  IngredientsExist = 22,
  VoxBroken = 23,
  IngredientBroken = 24,
  PlayerNotFound = 25,
  MoveItemError = 26,
  InvalidRequest = -1,
}

export enum InviteStatus {
  Active = 0,
  Revoked = 1,
  UsageLimitReached = 2,
  Expired = 3,
}

export enum GroupTypes {
  Warband = 0,
  Battlegroup = 1,
  Order = 2,
  Campaign = 3,
}

export enum ActionErrorCode {
  UnspecifiedError = 0,
  ServerException = 1,
  NoActionRequired = 2,
  GeneralDatabaseError = 3,
  PermissionDenied = 4,
  CharacterNotFound = 5,
  GroupNotFound = 6,
  WrongGroupType = 7,
  WrongFaction = 8,
  NameLength = 9,
  NameContainsInvalidCharacters = 10,
  NameContainsNaughtyWords = 11,
  NameContainsReservedWords = 12,
  NameAlreadyInUse = 13,
  ActiveWarbandAlreadyExists = 14,
  AlreadyAnOrderMember = 15,
  MemberLimitReached = 16,
  InviteCodeNotFound = 17,
  InviteRequirementsNotMet = 18,
  InviteExpired = 19,
  InviteRevoked = 20,
  InviteUsageLimitReached = 21,
  RankLimitReached = 22,
  InvalidRankLevel = 23,
}

export enum PatchPermissions {
  Public = 0,
  AllBackers = 1,
  InternalTest = 2,
  Development = 4,
  Alpha = 8,
  Beta1 = 16,
  Beta2 = 32,
  Beta3 = 64,
}

export enum VoxJobType {
  Invalid = 0,
  Block = 1,
  Grind = 2,
  Make = 3,
  Purify = 4,
  Refine = 5,
  Repair = 6,
  Salvage = 7,
  Shape = 8,
}

export enum ServerStatus {
  Offline = 0,
  Starting = 1,
  Online = 2,
}

export enum FieldCodes {
  BasicSuccess = 0,
  GroupActionSuccess = 1,
  ModifyVoxJobSuccess = 2,
  MoveItemSuccess = 3,
  ProgressionSuccess = 4,
  ModifySecureTradeSuccess = 5,
  UnspecifiedAuthorizationDenied = 1000,
  APIKeyAuthorizationFailed = 1001,
  LoginTokenAuthorizationFailed = 1002,
  RealmRestricted = 1003,
  UnspecifiedNotAllowed = 2000,
  RateLimitExceeded = 2001,
  InternalAction = 2002,
  UnspecifiedRequestError = 3000,
  UnspecifiedExecutionError = 4000,
  UnhandledExecutionException = 4001,
  DoesNotExist = 4002,
  UserStateConflict = 4003,
  InsufficientResource = 4004,
  VoxJobError = 4005,
  MoveItemError = 4006,
  SecureTradeError = 4007,
  ProgressionError = 4008,
  GroupActionError = 4009,
  UnspecifiedServiceUnavailable = 5000,
  DatabaseUnavailable = 5001,
  GroupServiceUnavailable = 5002,
  GameServiceUnavailable = 5003,
  PresenceServiceUnavailable = 5004,
  InvalidModel = 30001,
}

export const CharactersAPI = {
  GetCharactersV1: function(config: RequestConfig, loginToken: string, ): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/characters/getAll', {
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetCharactersOnShardV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/characters/getAllOnShard', {
      shardID: shardID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetCharacterV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/characters/get', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  DeleteCharacterV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/characters/delete', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  CreateCharacterV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, character: Partial<Character>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/characters/create', {
      shardID: shardID,
    }, character, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const ContentAPI = {
  MessageOfTheDayV1: function(config: RequestConfig, channel: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/messageoftheday', {
      channel: channel,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  PatcherHeroContentV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/patcherherocontent', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  PatcherAlertsV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/patcheralerts', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const CraftingAPI = {
  SetVoxJob: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, job: Partial<VoxJobType>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/setvoxjob', {
      shardID: shardID,
      characterID: characterID,
      job: job,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  ClearVoxJob: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/clearvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  SetRecipeID: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, recipeID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/setvoxrecipeid', {
      shardID: shardID,
      characterID: characterID,
      recipeID: recipeID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  SetQuality: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, quality: Partial<number>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/setvoxquality', {
      shardID: shardID,
      characterID: characterID,
      quality: quality,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  SetCustomItemName: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, itemName: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/setvoxcustomitemname', {
      shardID: shardID,
      characterID: characterID,
      itemName: itemName,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  AddIngredient: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, itemInstanceID: Partial<string>, unitCount: Partial<number>, slot: Partial<SubItemSlot>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/addvoxingredient', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      unitCount: unitCount,
      slot: slot,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  RemoveVoxIngredient: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, itemInstanceID: Partial<string>, unitCount: Partial<number>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/removevoxingredient', {
      shardID: shardID,
      characterID: characterID,
      itemInstanceID: itemInstanceID,
      unitCount: unitCount,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  StartVoxJob: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/startvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  CollectFinishedVoxJob: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/collectfinishedvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  CancelVoxJob: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/cancelvoxjob', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  SetVoxItemCount: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, count: Partial<number>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/crafting/setvoxitemcount', {
      shardID: shardID,
      characterID: characterID,
      count: count,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const GameDataAPI = {
  GetFactionInfoV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/gamedata/factionInfo', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetFactionsV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/gamedata/factions', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetAttributeInfoV1: function(config: RequestConfig, shard: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/gamedata/attributeInfo', {
      shard: shard,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetArchetypesV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/gamedata/archetypes', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetRacesV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/gamedata/races', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetAttributeOffsetsV1: function(config: RequestConfig, shard: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/gamedata/attributeOffsets', {
      shard: shard,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetOrderPermissionsV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/gamedata/orderPermissions', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const GroupsAPI = {
  CreateWarbandV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/createWarband', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  CreateBattlegroupV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/createBattlegroup', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  CreateOrderV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, name: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/createOrder', {
      shardID: shardID,
      characterID: characterID,
      name: name,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  KickV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, targetID: Partial<string>, groupID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/kick', {
      shardID: shardID,
      characterID: characterID,
      targetID: targetID,
      groupID: groupID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  InviteV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, groupID: Partial<string>, targetID: Partial<string | null>, targetName: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/invite', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      targetID: targetID,
      targetName: targetName,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  JoinV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, groupID: Partial<string>, inviteCode: Partial<string | null>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/join', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
      inviteCode: inviteCode,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  QuitV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, groupID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/quit', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  AbandonV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, groupID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/abandon', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  DisbandV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, groupID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/groups/abandon', {
      shardID: shardID,
      characterID: characterID,
      groupID: groupID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const ItemAPI = {
  MoveItems: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, request: Partial<MoveItemRequest>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/items/moveitems', {
      shardID: shardID,
      characterID: characterID,
      request: request,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  BatchMoveItems: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, requests: Partial<MoveItemRequest[]>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/items/batchmoveitems', {
      shardID: shardID,
      characterID: characterID,
    }, requests, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const OrdersAPI = {
}

export const PresenceAPI = {
  GetStartingServer: function(config: RequestConfig, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/presence/startingServer/{shardID}/{characterID}', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetServers: function(config: RequestConfig, shardID: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/presence/servers/{shardID}', {
      shardID: shardID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetPlayers: function(config: RequestConfig, shardID: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/presence/players/{shardID}', {
      shardID: shardID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const PlotsAPI = {
  ReleasePlotV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, entityID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/plot/releasePlot', {
      shardID: shardID,
      characterID: characterID,
      entityID: entityID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  ModifyPermissionsV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, entityID: Partial<string>, newPermissions: Partial<number>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/plot/modifyPermissions', {
      shardID: shardID,
      characterID: characterID,
      entityID: entityID,
      newPermissions: newPermissions,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  RemoveQueuedBlueprintV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, entityID: Partial<string>, indexToRemove: Partial<number>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/plot/removeQueuedBlueprint', {
      shardID: shardID,
      characterID: characterID,
      entityID: entityID,
      indexToRemove: indexToRemove,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  ReorderQueueV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, entityID: Partial<string>, indexToMove: Partial<number>, destinationIndex: Partial<number>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/plot/reorderQueue', {
      shardID: shardID,
      characterID: characterID,
      entityID: entityID,
      indexToMove: indexToMove,
      destinationIndex: destinationIndex,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetQueueStatusV1: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/plot/getQueueStatus', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const ProgressionAPI = {
  CollectCharacterDayProgression: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, logID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/character/collectdayprogression', {
      shardID: shardID,
      characterID: characterID,
      logID: logID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const SecureTradeAPI = {
  Invite: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, tradeTargetID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/invite', {
      shardID: shardID,
      characterID: characterID,
      tradeTargetID: tradeTargetID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  RevokeInvite: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, inviteTargetID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/revokeinvite', {
      shardID: shardID,
      characterID: characterID,
      inviteTargetID: inviteTargetID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  AcceptInvite: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, inviterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/acceptinvite', {
      shardID: shardID,
      characterID: characterID,
      inviterID: inviterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  RejectInvite: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, inviterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/rejectinvite', {
      shardID: shardID,
      characterID: characterID,
      inviterID: inviterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  AbortSecureTrade: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/abort', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  Lock: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/lock', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  Unlock: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/unlock', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  AddItems: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, items: Partial<SecureTradeItem[]>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/additems', {
      shardID: shardID,
      characterID: characterID,
    }, items, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  RemoveItem: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>, items: Partial<SecureTradeItem[]>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/removeItems', {
      shardID: shardID,
      characterID: characterID,
    }, items, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  Confirm: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/confirm', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  CancelTradeConfirmation: function(config: RequestConfig, loginToken: string, shardID: Partial<number>, characterID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('post', config.url + 'v1/secureTrade/cancelconfirmation', {
      shardID: shardID,
      characterID: characterID,
    }, null, { headers: Object.assign({}, {
      'loginToken': loginToken,
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const ServersAPI = {
  GetServersV1: function(config: RequestConfig, ): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/servers/getAll', {
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetServersForChannelV1: function(config: RequestConfig, channelId: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/servers/getForChannel', {
      channelId: channelId,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetHostsForServerV1: function(config: RequestConfig, channelId: Partial<number>, name: Partial<string>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/servers/getHosts', {
      channelId: channelId,
      name: name,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetAvailableZones: function(config: RequestConfig, shard: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/availableZones', {
      shard: shard,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

  GetZoneInfo: function(config: RequestConfig, shard: Partial<number>, zoneID: Partial<string>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/getZoneInfo', {
      shard: shard,
      zoneID: zoneID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export const TraitsAPI = {
  GetTraitsV1: function(config: RequestConfig, shardID: Partial<number>): Promise<RequestResult> {
    return xhrRequest('get', config.url + 'v1/traits', {
      shardID: shardID,
    }, null, { headers: Object.assign({}, {
      'Accept': 'application/json',
    }, config.headers || {}) });
  },

}

export interface CurrentMaxValue {
  current: number;
  maximum: number;
}

export interface Temperature {
  current: number;
  freezingThreshold: number;
  burndingThreshold: number;
}

export interface Vec2F {
  x: number;
  y: number;
}

export interface Vec3F {
  x: number;
  y: number;
  z: number;
}
