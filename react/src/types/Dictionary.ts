type Dictionary<KeyType extends string | number, ValueType> = {
  [Key in KeyType]: ValueType;
}

export default Dictionary;
