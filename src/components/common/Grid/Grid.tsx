import { Children } from "react";
import styles from "./Grid.module.scss";

interface IGridItem {
    flex?: number;
}

const GridItem: React.FC<IGridItem> = (props) => {
  return <div className={styles.gridItem} style={{ flexGrow: props.flex }}>{props.children}</div>;
};

interface IGridRow {
    ratio?: number[];
}

const GridRow: React.FC<IGridRow> = (props) => {
    let items: React.ReactNodeArray = [];
    Children.forEach(props.children, (child, index) => {
        const style = props.ratio ? { flex: props.ratio[index] } : {};
        items.push(<GridItem key={`GridItem-${index}`} {...style}>{child}</GridItem>);
    });
  return (
    <div className={styles.gridRow}>
      {items}
    </div>
  );
};

const Grid: React.FC = (props) => {
  return <div className={styles.grid}>{props.children}</div>;
};

export { Grid, GridRow };
