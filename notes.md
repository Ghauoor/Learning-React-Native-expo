# Core Component:

Built in React Native
"Translation" to Native Ui widgets provided by React Native
Example:
<View />
<Text />
<Image />

# Custom Components:

Combination of "Core" and other build in components

```
const myTitle = props => {
    return (
        <View>
            <Text>My Components<Text/>
        <View/>
    );
}
```

# Style React Native Apps

## Inline Style -->

Essientally using Props on core components

## Style Sheet objects

View is just like container to hold some other contents ie Button, image....

# Styling

## style prop:

Not supported by all but some core components
code snippets:

```
<Text
        style={{
          margin: 16,
          backgroundColor: "red",
          color: "white",
          padding: 15,
          borderWidth: 1,
        }}
      >
        Hello Another One
      </Text>

```

This is not best way and not reccommend

## Using StyleSheet Object:

```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 15,
    borderWidth: 2,
    borderColor: "purple",
    color: "black",
    padding: 16,
  },
});
```

Style sheet object also provide validation if you are not using correct properties or value

# Layout and Flex Box:

Layouts are (typically) created with FlexBox
very simlar to css
Elements are positioned inside of Container
positioning is controlled via style settings applied to the elements container
-----> Cross Axis
|
|
|
Mian Axis

```
flex : 1, --> Element (Container) should expand to occupy aviliable space...
flexDirextion: 'column', 
justifyContent: flex-start, --> How elements layouts in there axis
alignment : 'flex-start',
```
